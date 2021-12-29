import { rest } from 'msw';
import { db } from '../db';

export const events = [
  rest.get('/events', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ events: db.event.getAll() }));
  }),
];
