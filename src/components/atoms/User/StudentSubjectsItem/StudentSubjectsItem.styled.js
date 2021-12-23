import styled from 'styled-components';

export const StyledLi = styled.li`
  display: grid;
  align-items: center;
  position: relative;
  padding: 5px;
  grid-template-columns: 50%;
  grid-auto-flow: column;
`;

export const StyledSubjectName = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const StyledSubjectAverage = styled.div`
  padding: 7px;
  border-radius: 100%;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.l};
  width: min-content;
  height: min-content;
  justify-self: center;
  background-color: ${(props) =>
    props.average >= 1 && props.average <= 3
      ? '#CB8581'
      : props.average >= 3 && props.average <= 4
      ? '#E1D888'
      : '#8FCB81'};
`;
