import React, { useState } from "react";
import { useLayer } from "react-laag";

import BurgerIcon from "components/BurgerIcon";

import MenuItems from "./MenuItems";
import { LargeScreen, MenuButton, SmallScreen } from "./styles";

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
      <SmallScreen>
        <MenuButton {...triggerProps} onClick={() => setOpen(!isOpen)}>
          <BurgerIcon />
        </MenuButton>
        {isOpen &&
          renderLayer(
            <div {...layerProps}>
              <MenuItems closeMenu={() => setOpen(false)} />
            </div>
          )}
      </SmallScreen>
      <LargeScreen>
        <MenuItems />
      </LargeScreen>
    </>
  );
};

export default Menu;
