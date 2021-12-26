import { factory, primaryKey } from '@mswjs/data';
import faker from 'faker';

faker.seed(123);

const groups = ['A', 'B', 'C'];
const eventTypes = ['workshop', 'exam', 'lecture'];
const getRandomGroup = (index) => groups[index];
const getRandomValue = (array, index) => array[index];
const getRandomAverage = () =>
  faker.datatype.number({ min: 1, max: 6, precision: 0.1 });

export const db = factory({
  student: {
    id: primaryKey(faker.datatype.uuid),
    name: () => faker.fake('{{name.firstName}} {{name.lastName}}'),
    attendance: () => `${faker.datatype.number({ min: 0, max: 100 })}%`,
    average: getRandomAverage,
    group: () => getRandomGroup(faker.datatype.number({ min: 0, max: 2 })),
    course: () => faker.fake('{{random.word}} {{random.word}}'),
    grades: () => [
      {
        subject: 'Modern Economy',
        average: getRandomAverage(),
      },
      {
        subject: 'Trade and Logistics',
        average: getRandomAverage(),
      },
      {
        subject: 'Business Philosophy',
        average: getRandomAverage(),
      },
    ],
  },
  group: {
    id: primaryKey(String),
  },
  event: {
    id: primaryKey(faker.datatype.uuid),
    type: () =>
      getRandomValue(eventTypes, faker.datatype.number({ min: 0, max: 2 })),
    group: () =>
      getRandomValue(groups, faker.datatype.number({ min: 0, max: 2 })),
    subject: () => faker.fake('{{company.bsAdjective}} {{company.bsNoun}}'),
    date: faker.date.soon,
  },
  teacher: {
    id: primaryKey(() => '1'),
    name: () => 'Jacek Sobczak',
    login: () => 'teacher@studybuddy.com',
    password: () => 'Test1234&',
  },
});
