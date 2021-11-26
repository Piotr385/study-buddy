import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/molecules/FormField/FormField';
import TextButton from 'components/atoms/UI/TextButton/TextButton';
import { Wrapper, FormWrapper, StyledTitle } from './AddUserForm.styled';

const AddUserForm = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <>
      <Wrapper>
        {/*<Wrapper as="form">*/}
        <StyledTitle>Add new User</StyledTitle>
        <FormWrapper onSubmit={handleAddUser}>
          <FormField
            label="Name"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
          />
          <FormField
            label="Average"
            id="average"
            name="average"
            value={formValues.average}
            onChange={handleInputChange}
          />
          <FormField
            label="Attendance"
            id="attendance"
            name="attendance"
            value={formValues.attendance}
            onChange={handleInputChange}
          />
          <TextButton text="Add" type="submit" />
        </FormWrapper>
      </Wrapper>
    </>
  );
};

AddUserForm.propTypes = {
  handleAddUser: PropTypes.func.isRequired,
  formValues: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default AddUserForm;
