import styled from 'styled-components';

export const StyledA = styled.a`
  margin: 15px 0;
  padding: 8px 20px;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 25px;
  cursor: pointer;
  transition: opacity 300ms ease;
  font-weight: bold;
  &:hover {
    opacity: 0.7;
  }
`;

export const StyledButton = styled.button`
  margin: 15px 0;
  padding: 8px 20px;
  font-size: ${({ theme }) => theme.fontSize.m};
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
