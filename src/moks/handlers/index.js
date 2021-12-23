import { rest } from 'msw';
import { groups } from 'moks/data/groups';
import { db } from '../db';

export const handlers = [
  rest.get('/groups', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ groups }));
  }),
  rest.get('/groups/:group', (req, res, ctx) => {
    if (req.params.group) {
      const matchingStudents = db.student.findMany({
        where: {
          group: {
            equals: req.params.group,
          },
        },
      });
      return res(
        ctx.status(200),
        ctx.json({ studentsGroup: matchingStudents })
      );
    }
  }),
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
