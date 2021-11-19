import styled from 'styled-components';

export const Wrapper = styled.button`
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.grey};
  border: none;
  padding: 5px;
  display: flex;
  align-items: center;
  align-self: start;
  transition: background-color 300ms ease;
  cursor: pointer;

  &:hover {
    background-color: darkgray;
  }
`;

export const StyledImage = styled.img`
  height: 16px;
  width: 16px;
`;
