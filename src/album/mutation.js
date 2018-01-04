import gql from 'graphql-tag';

export default gql`
  mutation updateAlbum(
    $id: String
    $title: String!
    $artist: String
    $sources: [SourceInput]!
  ) {
    updateAlbum(id: $id, title: $title, artist: $artist, sources: $sources) {
      id
      artist
      title
      year
      firstPlayed
    }
  }
`;
