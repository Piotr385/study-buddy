import Student from './Student';

export default {
  title: 'components/molecules/Student',
  component: Student,
  argTypes: {},
};
const Template = (args) => <Student {...args} />;

export const GoodGrades = Template.bind([]);
GoodGrades.args = {
  user: {
    name: 'Piotr Kułakowski',
    average: '4.6',
    attendance: '86%',
  },
};

export const MediumGrades = Template.bind([]);
MediumGrades.args = {
  user: {
    name: 'Piotr Kułakowski',
    average: '3.4',
    attendance: '86%',
  },
};

export const BadGrades = Template.bind([]);
BadGrades.args = {
  user: {
    name: 'Piotr Kułakowski',
    average: '2.1',
    attendance: '86%',
  },
};
