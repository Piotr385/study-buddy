import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import IconButton from 'components/atoms/UI/IconButton/Button';
import close from 'assets/icons/close.svg';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Wrapper } from './Modal.styled';

const modalContainer = document.querySelector('#modal-container');

const Modal = ({ handleClose, children }) => {
  const modalNode = document.createElement('div');
  useEffect(() => {
    modalContainer.appendChild(modalNode);
    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  return ReactDOM.createPortal(
    <Wrapper>
      <ViewWrapper>
        <IconButton img={close} onClick={handleClose} />
        {children}
      </ViewWrapper>
    </Wrapper>,
    modalNode
  );
};

Modal.propTypes = {};

export default Modal;
