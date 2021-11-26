import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.form`
  display: grid;
  justify-items: start;
  gap: 10px;
  width: 100%;
`;

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
`;
