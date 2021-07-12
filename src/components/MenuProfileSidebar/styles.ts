import styled from 'styled-components';

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: white;
  position: fixed;
  z-index: 100;
  padding: 46px;
  bottom: 0;
  left: 0;
  right: 0;
  top: 48px;
  transition: 0.3s;
  pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(0)' : 'translateY(calc(-100% - 48px))'};

  @media (min-width: 860px) {
    display: none;
  }

  > div {
    max-width: 400px;
    margin: auto;

    > img {
      border-radius: ${({ theme }) => theme.shapes.borderRadius};
    }
  }

  a {
    font-size: 18px;
  }

  .boxLink {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.blue[600]};
    -webkit-text-decoration: none;
    text-decoration: none;
    font-weight: 800;
  }

  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: ${({ theme }) => theme.colors.gray[200]};
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
