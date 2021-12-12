import User from './User';

export default {
  title: 'components/molecules/User',
  component: User,
  argTypes: {},
};
const Template = (args) => <User {...args} />;

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
