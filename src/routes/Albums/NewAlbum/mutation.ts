import gql from 'graphql-tag';

export default gql`
  mutation createAlbum(
    $title: String!
    $artist: String!
    $comments: String
    $year: Int
    $firstPlayed: FirstPlayedInput
    $sources: [SourceInput]!
  ) {
    createAlbum(
      title: $title
      artist: $artist
      comments: $comments
      year: $year
      firstPlayed: $firstPlayed
      sources: $sources
    ) {
      id
      artist
      title
      comments
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
