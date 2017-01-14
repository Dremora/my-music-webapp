import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import logo from './logo.svg';
import Search from './Search';
import Album from './Album';
import { search } from './actions';

const Header = styled.header`
  background-color: #222;
  height: 80px;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Logo = styled.img`
  height: 60px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  padding: 0 10px;
  margin: 0 auto;
`;

const mapStateToProps = state =>
  ({ searchText: state.get('searchText'), albums: state.get('albums') });

export default connect(mapStateToProps)(({ dispatch, searchText, albums }) => {
  return (
    <div>
      <Header>
        <Logo src={logo} alt="logo" />
      </Header>
      <Contents>
        <Search value={searchText} onChange={text => dispatch(search(text))} />
        <div>
          {albums.map(album => <Album key={album.id} album={album} />)}
        </div>
      </Contents>
    </div>
  );
})
