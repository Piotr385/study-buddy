import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  justify-content: flex-start;
  padding: 30px 0;
  grid-row: 1 /3;
  grid-column: 1 / 1;
`;

export const StyledMenu = styled.menu`
  margin: 15px 0;
  padding: 0 25px 0 0;
  width: 100%;
  display: grid;
  justify-items: start;
`;

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  h1 {
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.white};
    text-align: right;
    margin-right: 20px;
  }
`;

export const LinkWrapper = styled.div`
  width: 100%;
  padding: 5px;
`;

export const StyledLink = styled(NavLink)`
  cursor: pointer;
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
