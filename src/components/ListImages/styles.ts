import styled from 'styled-components';
import * as CardStyles from 'components/Card/styles';

export const Container = styled(CardStyles.Container)`
  ul {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr 1fr;
    list-style: none;
  }

  img {
    object-fit: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  ul li {
    display: inline-block;
    height: 102px;
    position: relative;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.shapes.borderRadius};

    &:hover {
      cursor: pointer;
      filter: brightness(1.2);
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 1;
      background-image: linear-gradient(0deg, #00000073, transparent);
    }
  }

  .seeMore {
    color: ${({ theme }) => theme.colors.blue[600]};
    margin-top: 20px;

    &:hover {
      cursor: pointer;
      filter: brightness(1.2);
    }
  }
`;
