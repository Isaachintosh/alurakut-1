import styled from 'styled-components';
import * as CardStyles from '../Card/styles';

export const Container = styled(CardStyles.Container)`
  img {
    border-radius: ${({ theme }) => theme.shapes.borderRadius};
  }
`;

export const Actions = styled.div`
  a {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.blue[600]};
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;

    img {
      width: 16px;
      height: 16px;
      margin-right: 5px;
    }
  }
`;
