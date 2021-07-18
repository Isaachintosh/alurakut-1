import styled from 'styled-components';
import * as CardStyles from 'components/Card/styles';

export const Container = styled.main`
  width: 100%;
  grid-gap: 10px;
  margin: 0 auto;
  max-width: 500px;
  padding: 16px;

  .profileArea {
    display: none;

    @media (min-width: 860px) {
      display: block;
    }
  }

  @media (min-width: 860px) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: 'profileArea welcomeArea profileRelationsArea';
    grid-template-columns: 160px 1fr 312px;
  }

  .form-invalid {
    margin-bottom: ${({ theme }) => theme.spacing.gutter};
    color: #c92306;
  }

  .action-buttons-container {
    padding-top: ${({ theme }) => theme.spacing.gap};

    .action-button {
      border-radius: ${({ theme }) => theme.shapes.borderRadius};
      background: ${({ theme }) => theme.colors.blue[100]};
      color: ${({ theme }) => theme.colors.blue[600]};

      & + .action-button {
        margin-left: ${({ theme }) => theme.spacing.gap};
      }

      &.active {
        background: ${({ theme }) => theme.colors.blue[700]};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

export const ProfileRelationsBoxWrapper = styled(CardStyles.Container)`
  ul {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr 1fr;
    max-height: 220px;
    list-style: none;
  }

  img {
    object-fit: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  ul li a {
    display: inline-block;
    height: 102px;
    position: relative;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.shapes.borderRadius};

    span {
      color: ${({ theme }) => theme.colors.white};
      font-size: 10px;
      position: absolute;
      left: 0;
      bottom: 10px;
      z-index: 2;
      padding: 0 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
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
`;

export const ProfileInfoList = styled.ul`
  li {
    list-style: none;
    padding: 4px 0;

    &:nth-child(even) {
      background-color: ${({ theme }) => theme.colors.blue[100]};
    }
  }
`;
