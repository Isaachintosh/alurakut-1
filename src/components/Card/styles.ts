import styled from 'styled-components';

export const Container = styled.div`
  border-radius: ${({ theme }) => theme.shapes.borderRadius};
  background: ${({ theme }) => theme.colors.white};
  padding: 16px;
  margin-bottom: 10px;

  .boxLink {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.blue[600]};
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

  input {
    width: 100%;
    background-color: #f4f4f4;
    color: ${({ theme }) => theme.colors.gray[500]};
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;

    ::placeholder {
      color: ${({ theme }) => theme.colors.gray[500]};
      opacity: 1;
    }
  }

  button {
    border: 0;
    padding: 8px 12px;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 10000px;
    background-color: ${({ theme }) => theme.colors.blue[700]};
  }
`;
