import { rest } from 'msw';
import { db } from '../db';

export const groups = [
  rest.get('/groups', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ groups: db.group.getAll() }));
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
];
