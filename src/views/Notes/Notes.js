import React from 'react';
import TextButton from 'components/atoms/UI/TextButton/TextButton';
import Note from 'components/molecules/Note/Note';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from 'store/index';
import {
  FormWrapper,
  NotesWrapper,
  StyledFormField,
  Wrapper,
} from './Notes.styles';
import { useForm } from 'hooks/useForm';
import { useValidators } from 'hooks/useValidators';

const initialState = {
  title: '',
  content: '',
  errorInputs: {},
};

const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const {
    formValues: { title, content, errorInputs },
    handleInputChange,
    handleThrowError,
    handleClearForm,
  } = useForm(initialState);
  const { validateEmpty } = useValidators(handleThrowError);

  const handleAddNote = (e) => {
    e.preventDefault();

    const requirements = e.target.querySelectorAll('*[data-required="true"]');
    requirements.forEach((requirement) => {
      validateEmpty(requirement);
    });

    if (errorInputs.title === '' && errorInputs.content === '') {
      dispatch(
        addNote({
          title,
          content,
        })
      );
      handleClearForm(initialState);
    }
  };

  return (
    <Wrapper>
      <FormWrapper onSubmit={handleAddNote}>
        <StyledFormField
          label="Title"
          name="title"
          id="title"
          onChange={handleInputChange}
          value={title}
          required="true"
        />
        <p>{errorInputs.title}</p>
        <StyledFormField
          isTextarea
          label="Content"
          name="content"
          id="content"
          required="true"
          onChange={handleInputChange}
          value={content}
        />
        <p>{errorInputs.content}</p>
        <TextButton type="submit">Add</TextButton>
      </FormWrapper>
      <NotesWrapper>
        {notes.length ? (
          notes.map(({ title, content, id }) => (
            <Note id={id} key={id} title={title} content={content} />
          ))
        ) : (
          <p>Create your first note</p>
        )}
      </NotesWrapper>
    </Wrapper>
  );
};

export default Notes;
