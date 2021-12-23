import React from 'react';
import IconButton from 'components/atoms/UI/IconButton/Button';
import close from 'assets/icons/close.svg';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { ModalWrapper } from './Modal.styled';

const Modal = ({ handleClose, isOpen, children }) => {
  return (
    <ModalWrapper
      appElement={document.getElementById('root')}
      isOpen={isOpen}
      onRequestClose={handleClose}
    >
      <ViewWrapper>
        <IconButton img={close} onClick={handleClose} />
        {children}
      </ViewWrapper>
    </ModalWrapper>
  );
};

Modal.propTypes = {};

export default Modal;
