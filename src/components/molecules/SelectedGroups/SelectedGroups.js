import React from 'react';
import { Title } from 'components/atoms/UI/Title/Title';
import TextButton from 'components/atoms/UI/TextButton/TextButton';

const SelectedGroups = ({ handleClose, groups = [] }) => {
  return (
    <>
      <Title>Select</Title>
      {groups.map((group) => (
        <TextButton
          onClick={handleClose}
          type="router-link"
          key={group}
          to={`/group/${group}`}
        >
          Group {group}
          <br />
        </TextButton>
      ))}
    </>
  );
};

SelectedGroups.propTypes = {};

export default SelectedGroups;
