import gql from 'graphql-tag';

export default gql`
  query AlbumPerYearCount {
    albumPerYearCount {
      year
      count
    }
  }
`;
