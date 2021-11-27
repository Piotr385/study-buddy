import React, { useContext, useState } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import TextButton from 'components/atoms/UI/TextButton/TextButton';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/UI/Title/Title';
import { UsersContext } from 'providers/UsersProvider';

const AddUser = () => {
  const { handleAddUser } = useContext(UsersContext);
  const [formValues, setFormValues] = useState({
    name: '',
    average: '',
    attendance: '',
  });

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    handleAddUser(formValues);
    setFormValues({
      name: '',
      attendance: '',
      average: '',
    });
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
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

export default AddUser;
