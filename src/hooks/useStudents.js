import { useCallback } from 'react';
import axios from 'axios';

const useStudents = () => {
  const getGroups = useCallback(async () => {
    try {
      const results = await axios.get('/groups');
      return results.data.groups;
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getStudents = useCallback(async (group) => {
    if (group)
      try {
        const results = await axios.get(`/groups/${group}`);
        return results.data.studentsGroup;
      } catch (err) {
        console.log(err);
      }
    else
      try {
        const results = await axios.get(`/students`);
        return results.data.students;
      } catch (err) {
        console.log(err);
      }
  }, []);

  const searchStudents = useCallback(async (inputValue) => {
    try {
      const results = await axios.get(`/students/search/${inputValue}`);
      return results.data.searchingStudents;
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getStudentById = useCallback(async (id) => {
    try {
      const results = await axios.get(`/students/${id}`);
      return results.data.student;
    } catch (err) {
      console.log(err);
    }
  }, []);

  return { getGroups, getStudents, searchStudents, getStudentById };
};

export default useStudents;
