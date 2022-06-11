import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

import Text from "components/Text";
import useIsFirstRender from "data/useIsFirstRender";

import { anchorStyle, barStyle, listItemStyle } from "./styles.css";

interface Props {
  href: string;
  children: string;
  onClick?: () => void;
}

const Item = ({ children, href, onClick }: Props) => {
  const router = useRouter();
  const isFirstRender = useIsFirstRender();

  const current = router.pathname.startsWith(href);
  return (
    <li className={listItemStyle}>
      <Link href={href} passHref>
        {/* eslint-disable-next-line */}
        <a className={anchorStyle} onClick={onClick}>
          <Text color="grey" size="medium" weight="bold">
            {children}
          </Text>
        </a>
      </Link>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore https://github.com/framer/motion/pull/1573 */}
      <AnimatePresence>
        {current && (
          <motion.div
            className={barStyle}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            initial={{ width: isFirstRender ? "100%" : 0 }}
            key="bar"
            transition={{ type: "tween", duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </li>
  );
};

export default Item;
