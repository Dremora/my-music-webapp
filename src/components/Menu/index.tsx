import { useState } from "react";
import { useLayer } from "react-laag";

import BurgerIcon from "components/BurgerIcon";

import MenuItems from "./MenuItems";
import {
  largeScreenStyle,
  menuButtonStyle,
  smallScreenStyle,
} from "./styles.css";

const Menu = () => {
  const [isOpen, setOpen] = useState(false);

  const { layerProps, renderLayer, triggerProps } = useLayer({
    containerOffset: 16,
    isOpen,
    onOutsideClick: () => setOpen(false),
    placement: "bottom-end",
    triggerOffset: 12,
  });

  return (
    <>
      <div className={smallScreenStyle}>
        <button
          className={menuButtonStyle}
          {...triggerProps}
          onClick={() => setOpen(!isOpen)}
        >
          <BurgerIcon />
        </button>
        {isOpen &&
          renderLayer(
            <div {...layerProps}>
              <MenuItems closeMenu={() => setOpen(false)} />
            </div>
          )}
      </div>
      <div className={largeScreenStyle}>
        <MenuItems />
      </div>
    </>
  );
};

export default Menu;
