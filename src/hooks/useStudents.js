import { useCallback } from 'react';
import axios from 'axios';

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
  const getGroups = useCallback(async () => {
    try {
      const results = await studentsAPI.get('/groups');
      return results.data.groups;
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getStudents = useCallback(async (group) => {
    if (group)
      try {
        const results = await studentsAPI.get(`/groups/${group}`);
        return results.data.studentsGroup;
      } catch (err) {
        console.log(err);
      }
    else
      try {
        const results = await studentsAPI.get(`/students`);
        return results.data.students;
      } catch (err) {
        console.log(err);
      }
  }, []);

  const searchStudents = useCallback(async (inputValue) => {
    try {
      const results = await studentsAPI.get(`/students/search/${inputValue}`);
      return results.data.searchingStudents;
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getStudentById = useCallback(async (id) => {
    try {
      const results = await studentsAPI.get(`/students/${id}`);
      return results.data.student;
    } catch (err) {
      console.log(err);
    }
  }, []);

  return { getGroups, getStudents, searchStudents, getStudentById };
};

export default useStudents;
