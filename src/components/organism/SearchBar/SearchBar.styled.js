import styled from 'styled-components';
import { Input } from 'components/atoms/Form/Input/Input';

export const SearchBarWrapper = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;

  ${Input} {
    font-size: ${({ theme }) => theme.fontSize.xl};
    width: 100%;
    max-width: 350px;
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
  }
`;

export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: 40px;

  p {
    margin: 5px;
  }
`;

export const StyledUl = styled.ul`
  z-index: 1000;
  max-height: 500px;
  padding: 10px;
  list-style: none;
  width: 100%;
  position: absolute;
  left: 320px;
  top: 44px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.lightPurple};
  border-top: none;
  max-width: 350px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;

  li {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGrey};
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    padding: 20px 5px;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.lightPurple};
    }

    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
    }
  }
`;
