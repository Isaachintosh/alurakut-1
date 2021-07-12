import styled from 'styled-components';
import * as CardStyles from '../Card/styles';

export const Container = styled(CardStyles.Container)`
  img {
    border-radius: ${({ theme }) => theme.shapes.borderRadius};
  }
`;
