import gql from "graphql-tag";

export default gql`
  query AlbumPerFirstPlayedYearCount {
    albumPerFirstPlayedYearCount {
      year
      count
    }
  }
`;
