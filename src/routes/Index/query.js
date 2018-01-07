import gql from 'graphql-tag';

export default gql`
  query FindAlbums($query: String) {
    albums(query: $query) {
      id
      artist
      title
      year
      firstPlayed
    }
  }
`;
