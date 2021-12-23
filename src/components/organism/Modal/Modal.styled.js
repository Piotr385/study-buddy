import styled from 'styled-components';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import ReactModal from 'react-modal';

export const ModalWrapper = styled(ReactModal)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 40;
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 10px;

  &.grid {
    display: grid;
  }

  & ${ViewWrapper} {
    height: min-content;
    display: grid;
    justify-items: center;
  }

  & button {
    justify-self: end;
  }

  & a {
    text-decoration: none;
  }
`;
