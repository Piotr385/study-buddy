import styled from 'styled-components';

export const StyledButton = styled.button`
  margin: 15px 0;
  padding: ${({ isBig }) => (isBig ? '10px 38px' : '8px 20px')};
  font-size: ${({ isBig, theme: { fontSize } }) =>
    isBig ? fontSize.m : fontSize.s};
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 25px;
  cursor: pointer;
  transition: opacity 300ms ease;
  border: none;
  font-weight: bold;

  &:hover {
    opacity: 0.7;
  }
`;
