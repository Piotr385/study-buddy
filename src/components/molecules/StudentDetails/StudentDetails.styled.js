import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  width: 100%;

  & button {
    justify-self: center;
  }
`;

export const Header = styled.header`
  display: grid;
  grid-auto-flow: column;
  width: 100%;
`;

export const StyledAverage = styled.div`
  padding: 10px;
  border-radius: 100%;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.xl};
  width: min-content;
  height: min-content;
  grid-column: 1;
  background-color: ${(props) =>
    props.average >= 2 && props.average <= 3
      ? '#CB8581'
      : props.average >= 3 && props.average <= 4
      ? '#E1D888'
      : '#8FCB81'};
`;

export const Main = styled.main`
  display: grid;
  gap: 5px;
  width: 100%;
  padding: 30px;
`;

export const BoldSpan = styled.span`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const CourseTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-bottom: 15px;
`;

export const StyledUl = styled.ul`
  width: 100%;
  padding: 10px;
  margin: 0;
  list-style: none;
`;
