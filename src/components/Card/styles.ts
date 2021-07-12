import styled from 'styled-components';

export const Container = styled.div`
  border-radius: ${({ theme }) => theme.shapes.borderRadius};
  background: ${({ theme }) => theme.colors.white};
  padding: 16px;
  margin-bottom: 10px;

  .boxLink {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.blue[100]};
    text-decoration: none;
    font-weight: 800;
  }

  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray[500]};
    margin-bottom: 20px;
  }

  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
