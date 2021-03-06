import gql from "graphql-tag";

export default gql`
  query GetAlbum($id: BinaryId!) {
    album(id: $id) {
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
