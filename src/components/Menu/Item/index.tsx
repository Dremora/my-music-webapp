import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import Text from "components/Text";
import useIsFirstRender from "data/useIsFirstRender";

import { Anchor, Bar, ListItem } from "./styles";

interface Props {
  href: string;
  children: string;
  onClick?: () => void;
}

const Item = ({ children, href, onClick }: Props) => {
  const router = useRouter();
  const isFirstRender = useIsFirstRender();

  const current = router.pathname === href;
  return (
    <ListItem>
      <Link href={href} passHref>
        <Anchor onClick={onClick}>
          <Text color="grey" size="medium" weight="bold">
            {children}
          </Text>
        </Anchor>
      </Link>
      <AnimatePresence>
        {current && (
          <Bar
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            initial={{ width: isFirstRender ? "100%" : 0 }}
            key="bar"
            transition={{ type: "tween", duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </ListItem>
  );
};

export default Item;
