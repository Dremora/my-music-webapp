// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Search from './Search';
import Album from './Album';

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  padding: 0 10px;
  margin: 0 auto;
`;

export default class Library extends Component {
  constructor() {
    super();
    this.state = {
      searchText: ''
    };

    this.setSearchText = this.setSearchText.bind(this);
  }

  setSearchText(searchText : string) {
    this.setState({ searchText })
  }

  render() {
    return <Contents>
      <Search value={this.state.searchText} onChange={this.setSearchText} />
      <div>
        <AlbumListContainer searchText={this.state.searchText}/>
      </div>
    </Contents>
  }
}

const AlbumList = props =>
  <div>
    {props.data && !props.data.loading && !props.data.error && props.data.albums ?
      props.data.albums.map(album => <Album key={album.id} album={album} />)
    : ''}
  </div>;

const FindAlbums = gql`
  query FindAlbums($query: String) {
    albums(query: $query) {
      id, artist, title, year, firstPlayed
    }
  }
`;

const AlbumListContainer = graphql(FindAlbums, {
  options: ({ searchText }) => ({ variables: { query: searchText } }),
  skip: ({ searchText }) => !searchText
})(AlbumList);
