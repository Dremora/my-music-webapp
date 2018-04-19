import gql from 'graphql-tag';

export default gql`
  mutation createAlbum($title: String!, $artist: String!, $comments: String, $year: Int, $sources: [SourceInput]!) {
    createAlbum(title: $title, artist: $artist, comments: $comments, year: $year, sources: $sources) {
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
