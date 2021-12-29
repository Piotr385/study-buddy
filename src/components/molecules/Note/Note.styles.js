import styled from 'styled-components';
import IconButton from 'components/atoms/UI/IconButton/Button';

export const NoteWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  h3,
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const StyledIconButton = styled(IconButton)`
  position: absolute;
  top: 20px;
  left: -40px;
`;
