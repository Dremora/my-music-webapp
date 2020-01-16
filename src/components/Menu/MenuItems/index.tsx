import React from 'react';

import { useLogin } from 'data/login';

import Item from '../Item';

import { Items } from './styles';

interface Props {
  closeMenu?: () => void;
}

const MenuItems = ({ closeMenu }: Props) => {
  const { isLoggedIn } = useLogin();

  return (
    <Items>
      <Item href="/first-played" onClick={closeMenu}>
        First played
      </Item>
      <Item href="/years" onClick={closeMenu}>
        Years
      </Item>
      {isLoggedIn && (
        <Item href="/albums/new" onClick={closeMenu}>
          New album
        </Item>
      )}
    </Items>
  );
};

export default MenuItems;
