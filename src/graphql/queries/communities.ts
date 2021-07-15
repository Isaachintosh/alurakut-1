import { gql } from 'graphql-request';

export const QUERY_COMMUNITIES = gql`
  query {
    allCommunities {
      id
      title
      imageUrl
      creatorSlug
    }
  }
`;
