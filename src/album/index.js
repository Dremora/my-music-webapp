import { graphql } from 'react-apollo';

import View from './View';

import GetAlbum from './query';
import UpdateAlbum from './mutation';

export default graphql(GetAlbum, {
  options: ({ params: { id } }) => ({ variables: { id } })
})(
  graphql(UpdateAlbum, {
    props: ({ mutate }) => ({
      submit: ({ id, title, artist, comments, sources, year, firstPlayed }) =>
        mutate({
          variables: {
            id,
            title,
            artist,
            comments,
            year,
            firstPlayed,
            sources: sources.map(source => ({
              accurateRip: source.accurateRip,
              comments: source.comments,
              cueIssues: source.cueIssues,
              discs: source.discs,
              download: source.download,
              edition: source.edition,
              format: source.format,
              location: source.location,
              mbid: source.mbid,
              tagIssues: source.tagIssues,
              __typename: 'SourceInput'
            }))
          }
        })
    })
  })(View)
);
