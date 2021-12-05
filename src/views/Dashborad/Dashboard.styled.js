import styled from 'styled-components';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

export const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: max-content 120px;
  gap: 10px;
`;

export const InvisibleWrapper = styled.div`
  position: absolute;
  background-color: #c5c5c596;
  background-opacity: 0.5;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: none;
  justify-items: center;
  align-items: center;
  padding: 10px;
  grid-template-rows: min-content;

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
