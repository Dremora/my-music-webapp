import { useCallback, useState } from "react";
import { useLayer } from "react-laag";

import BurgerIcon from "components/BurgerIcon";

import MenuItems from "./MenuItems";
import {
  largeScreenStyle,
  menuButtonStyle,
  smallScreenStyle,
} from "./styles.css";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const { layerProps, renderLayer, triggerProps } = useLayer({
    containerOffset: 16,
    isOpen,
    onOutsideClick: () => setIsOpen(false),
    placement: "bottom-end",
    triggerOffset: 12,
  });

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleMenu = useCallback(() => setIsOpen((open) => !open), []);

  return (
    <>
      <div className={smallScreenStyle}>
        <button
          className={menuButtonStyle}
          onClick={toggleMenu}
          ref={triggerProps.ref}
          type="button"
        >
          <BurgerIcon />
        </button>
        {isOpen
          ? renderLayer(
              <div ref={layerProps.ref} style={layerProps.style}>
                <MenuItems closeMenu={closeMenu} />
              </div>
            )
          : null}
      </div>
      <div className={largeScreenStyle}>
        <MenuItems />
      </div>
    </>
  );
}

export default Menu;
