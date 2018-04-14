import gql from 'graphql-tag';

export default gql`
  mutation updateAlbum(
    $id: String!
    $title: String!
    $artist: String!
    $comments: String
    $year: Int
    $sources: [SourceInput]!
  ) {
    updateAlbum(id: $id, title: $title, artist: $artist, comments: $comments, year: $year, sources: $sources) {
      id
      artist
      title
      comments
      year
      firstPlayed
      sources {
        id
        accurateRip
        comments
        cueIssues
        discs
        download
        edition
        format
        location
        mbid
        tagIssues
      }
    }
  }
`;
