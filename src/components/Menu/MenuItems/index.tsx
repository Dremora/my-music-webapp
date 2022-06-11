import { useLogin } from "data/login";

import Item from "../Item";

import { itemsStyle } from "./styles.css";

interface Props {
  closeMenu?: () => void;
}

const MenuItems = ({ closeMenu }: Props) => {
  const { isLoggedIn } = useLogin();

  return (
    <ul className={itemsStyle}>
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
    </ul>
  );
};

export default MenuItems;
