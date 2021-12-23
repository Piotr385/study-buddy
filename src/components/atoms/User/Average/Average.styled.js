import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 7px;
  border-radius: 100%;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.l};
  width: 40px;
  text-align: center;
  background-color: ${(props) =>
    props.average > 0 && props.average <= 3
      ? '#CB8581'
      : props.average >= 3 && props.average <= 4
      ? '#E1D888'
      : '#8FCB81'};
`;
