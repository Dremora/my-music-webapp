// @flow

import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import FindAlbums from './query';
import View from './View';

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      searchText: ''
    };
  }

  setSearchText = (searchText: string) => {
    this.setState({ searchText });
  };

  render() {
    return <AlbumListContainer searchText={this.state.searchText} setSearchText={this.setSearchText} />;
  }
}

const AlbumListContainer = graphql(FindAlbums, {
  options: ({ searchText }) => ({ variables: { query: searchText } }),
  skip: ({ searchText }) => !searchText
})(View);
