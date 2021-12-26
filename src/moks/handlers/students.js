import { rest } from 'msw';
import { db } from '../db';

export const students = [
  rest.get('/students', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ students: db.student.getAll() }));
  }),
  rest.get('/students/search/:searchValue', (req, res, ctx) => {
    if (req.params.searchValue) {
      const encodedSearchValue = decodeURI(req.params.searchValue);

      const searchingStudents = db.student.findMany({
        where: {
          name: {
            contains: encodedSearchValue,
          },
        },
      });
      return res(ctx.status(200), ctx.json({ searchingStudents }));
    }
  }),
  rest.get('/students/:id', (req, res, ctx) => {
    const student = db.student.findFirst({
      where: {
        id: {
          equals: req.params.id,
        },
      },
    });

    return res(ctx.status(200), ctx.json({ student }));
  }),
];
