import gql from "graphql-tag";

export default gql`
  query FindAlbums($searchText: String!) {
    albums(query: $searchText) {
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
