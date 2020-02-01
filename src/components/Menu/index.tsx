import React from 'react';
import { ToggleLayer } from 'react-laag';

import BurgerIcon from 'components/BurgerIcon';

import MenuItems from './MenuItems';
import { MenuButton, SmallScreen, LargeScreen } from './styles';

const Menu = () => {
  return (
    <>
      <SmallScreen>
        <ToggleLayer
          closeOnOutsideClick
          placement={{
            anchor: 'BOTTOM_RIGHT',
            possibleAnchors: [],
            autoAdjust: true,
            snapToAnchor: false,
            triggerOffset: 12,
            scrollOffset: 16
          }}
          renderLayer={({ close, isOpen, layerProps }) =>
            isOpen && (
              <div ref={layerProps.ref} style={layerProps.style}>
                <MenuItems closeMenu={close} />
              </div>
            )
          }
        >
          {({ toggle, triggerRef }) => (
            <MenuButton onClick={toggle} ref={triggerRef}>
              <BurgerIcon />
            </MenuButton>
          )}
        </ToggleLayer>
      </SmallScreen>
      <LargeScreen>
        <MenuItems />
      </LargeScreen>
    </>
  );
};

export default Menu;
