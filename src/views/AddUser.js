import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/molecules/FormField/FormField';
import TextButton from 'components/atoms/UI/TextButton/TextButton';
import { UserShape } from 'types';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/UI/Title/Title';

const AddUser = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <ViewWrapper as="form" onSubmit={handleAddUser}>
      <Title>Add new student</Title>
      <FormField
        label="Name"
        id="name"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <FormField
        label="Attendance"
        id="attendance"
        name="attendance"
        value={formValues.attendance}
        onChange={handleInputChange}
      />
      <FormField
        label="Average"
        id="average"
        name="average"
        value={formValues.average}
        onChange={handleInputChange}
      />
      <TextButton type="submit" text="Add" />
    </ViewWrapper>
  );
};

AddUser.propTypes = {
  handleAddUser: PropTypes.func.isRequired,
  formValues: PropTypes.shape(UserShape),
  handleInputChange: PropTypes.func.isRequired,
};

export default AddUser;
