import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
`;

export const StyledNameSpan = styled.span`
  display: block;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.l};
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.grey};
`;
