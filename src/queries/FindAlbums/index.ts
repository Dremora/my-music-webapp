import gql from "graphql-tag";

export default gql`
  query FindAlbums($filter: AlbumFilterInput!) {
    albums(filter: $filter) {
      id
      artist
      title
      year
      firstPlayed {
        ... on FirstPlayedTime {
          timestamp
        }
        ... on FirstPlayedDate {
          year
          month
          day
        }
      }
    }
  }
`;
