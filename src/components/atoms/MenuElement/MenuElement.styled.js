import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  padding: 5px;
`;

export const StyledLink = styled(NavLink)`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  margin: 10px 20px 10px auto;
  transition: opacity 300ms ease;
  display: block;
  width: 100%;
  position: relative;

  &:visited {
    text-decoration: none;
  }
  &:hover {
    opacity: 0.7;
  }

  &.active {
    &::after {
      opacity: 1;
    }
  }
  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: '';
    position: absolute;
    width: 18px;
    height: 3px;
    top: 50%;
    transform: translateY(-50%);
    right: -24px;
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`;
