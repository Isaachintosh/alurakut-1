import { gql } from 'graphql-request';

export const QUERY_MESSAGES = gql`
  query {
    allMessages {
      id
      creatorSlug
      message
    }
  }
`;
