import { useCallback } from 'react';
import axios from 'axios';
import { useError } from './useError';

const studentsAPI = axios.create({});

studentsAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const useStudents = () => {
  const { dispatchError } = useError();

  const getGroups = useCallback(async () => {
    try {
      const results = await studentsAPI.get('/groups');
      return results.data.groups;
    } catch (err) {
      dispatchError('Something went wrong! Cannot get groups!');
    }
  }, [dispatchError]);

  const getStudents = useCallback(
    async (group) => {
      if (group)
        try {
          const results = await studentsAPI.get(`/groups/${group}`);
          return results.data.studentsGroup;
        } catch (err) {
          dispatchError('Something went wrong! Cannot get students!');
        }
      else
        try {
          const results = await studentsAPI.get(`/students`);
          return results.data.students;
        } catch (err) {
          dispatchError('Something went wrong! Cannot get students!');
        }
    },
    [dispatchError]
  );

  const searchStudents = useCallback(
    async (inputValue) => {
      try {
        const results = await studentsAPI.get(`/students/search/${inputValue}`);
        return results.data.searchingStudents;
      } catch (err) {
        dispatchError();
      }
    },
    [dispatchError]
  );

  const getStudentById = useCallback(
    async (id) => {
      try {
        const results = await studentsAPI.get(`/students/${id}`);
        return results.data.student;
      } catch (err) {
        dispatchError('Something went wrong! Cannot get student!');
      }
    },
    [dispatchError]
  );

  return { getGroups, getStudents, searchStudents, getStudentById };
};

export default useStudents;
