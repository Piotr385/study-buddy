import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { handlers } from './moks/handlers';
import { db } from './moks/db';

const server = setupServer(...handlers);

beforeAll(() => {
  db.group.create({
    id: 'A',
  });
  db.group.create({
    id: 'B',
  });
  db.group.create({
    id: 'C',
  });

  db.teacher.create();

  for (let i = 0; i < 25; i++) {
    db.student.create();
    db.event.create();
  }

  server.listen();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
