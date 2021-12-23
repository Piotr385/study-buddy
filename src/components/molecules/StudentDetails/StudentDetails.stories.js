import React from 'react';
import StudentDetails from './StudentDetails';
import Modal from 'components/organism/Modal/Modal';

export default {
  title: '/components/molecules/StudentDetails',
  component: StudentDetails,
};

const Template = (args) => (
  <Modal {...args}>
    <StudentDetails
      student={{
        id: '2',
        name: 'Krzysztof Batko',
        attendance: '23%',
        average: '3.3',
        group: 'A',
        course: 'Economy and finances',
        grades: [
          {
            subject: 'Modern Economy',
            average: '3.4',
          },
          {
            subject: 'Trade and Logistics',
            average: '4.1',
          },
          {
            subject: 'Business Philosophy',
            average: '5.0',
          },
        ],
      }}
    />
  </Modal>
);

export const Default = Template.bind([]);
