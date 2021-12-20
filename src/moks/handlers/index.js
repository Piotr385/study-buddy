import { rest } from 'msw';
import { students } from 'moks/data/students';
import { groups } from 'moks/data/groups';

export const handlers = [
  rest.get('/groups', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ groups }));
  }),
  rest.get('/groups/:group', (req, res, ctx) => {
    if (req.params.group) {
      const matchingStudents = students.filter(
        (student) => student.group === req.params.group
      );
      return res(
        ctx.status(200),
        ctx.json({ studentsGroup: matchingStudents })
      );
    }
  }),
  rest.get('/students', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ students }));
  }),
  rest.get('/students/search/:searchValue', (req, res, ctx) => {
    if (req.params.searchValue) {
      const encodedSearchValue = decodeURI(
        req.params.searchValue
      ).toLowerCase();

      const searchingStudents = students.filter((student) =>
        student.name.toLowerCase().includes(encodedSearchValue)
      );
      return res(ctx.status(200), ctx.json({ searchingStudents }));
    }
  }),
  rest.get('/students/:id', (req, res, ctx) => {
    const student = students.find((student) => student.id === req.params.id);

    return res(ctx.status(200), ctx.json({ student }));
  }),
];
