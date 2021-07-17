import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding-top: 32px;

  .button-close {
    position: absolute;
    top: 8px;
    right: 16px;

    background: transparent;
    border: 0;
  }

  .file-input-container {
    padding: 0 16px;
    text-align: center;

    label {
      display: block;
      padding: 0 16px;
      width: 100%;
      display: block;
      border: 0;
      padding: 12px;
      border-radius: ${({ theme }) => theme.shapes.borderRadius};
      background-color: ${({ theme }) => theme.colors.blue[600]};
      color: ${({ theme }) => theme.colors.white};

      &:hover {
        cursor: pointer;
        filter: brightness(1.2);
      }
    }
  }
`;
