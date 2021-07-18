import styled from 'styled-components';

export const Container = styled.div`
  .loginScreen {
    padding: 16px;
    max-width: 1110px;
    display: grid;
    grid-gap: ${({ theme }) => theme.spacing.gap};
    grid-template-areas:
      'logoArea'
      'formArea'
      'footerArea';

    @media (min-width: 860px) {
      grid-template-columns: 2fr 1fr;
      grid-template-areas:
        'logoArea formArea'
        'logoArea formArea'
        'footerArea footerArea';
    }

    .logoArea {
      grid-area: logoArea;
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: ${({ theme }) => theme.shapes.borderRadius};
      padding: ${({ theme }) => theme.spacing.gutter};
      text-align: center;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      min-height: 263px;

      @media (min-width: 860px) {
        min-height: 368px;
      }

      p {
        font-size: 12px;
        line-height: 1.2;

        &:not(:last-child) {
          margin-bottom: 12px;
        }

        strong {
          color: ${({ theme }) => theme.colors.pink};
        }
      }

      img {
        max-height: 45px;
        margin-bottom: 36px;
      }
    }

    .formArea {
      grid-area: formArea;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;

      .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: var(--gutter);
        padding-left: 50px;
        padding-right: 50px;
        background-color: ${({ theme }) => theme.colors.gray[100]};
        border-radius: ${({ theme }) => theme.shapes.borderRadius};
        flex: 1;

        &:not(:last-child) {
          margin-bottom: ${({ theme }) => theme.spacing.gap};
        }

        &:first-child {
          min-height: 224px;

          @media (min-width: 860px) {
            min-height: 282px;
          }
        }

        p {
          font-size: 14px;
        }

        a {
          text-decoration: none;
          color: ${({ theme }) => theme.colors.blue[600]};
        }

        input {
          width: 100%;
          display: block;
          border: 1px solid ${({ theme }) => theme.colors.gray[300]};
          padding: 12px;
          background-color: ${({ theme }) => theme.colors.white};
          border-radius: ${({ theme }) => theme.shapes.borderRadius};
          margin-top: 24px;
          margin-bottom: 16px;
        }

        button {
          width: 100%;
          display: block;
          border: 0;
          padding: 12px;
          border-radius: ${({ theme }) => theme.shapes.borderRadius};
          background-color: ${({ theme }) => theme.colors.blue[600]};
          color: ${({ theme }) => theme.colors.white};
        }
      }
    }

    .footerArea {
      grid-area: footerArea;
      background-color: ${({ theme }) => theme.colors.blue[200]};
      border-radius: ${({ theme }) => theme.shapes.borderRadius};
      padding: 8px;

      p {
        font-size: 12px;
        text-align: center;

        a {
          text-decoration: none;
          color: ${({ theme }) => theme.colors.blue[600]};
        }
      }
    }
  }
`;
