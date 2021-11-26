import styled from 'styled-components';

export const Wrapper = styled.nav`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  justify-content: flex-start;
  padding: 30px 0;
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
