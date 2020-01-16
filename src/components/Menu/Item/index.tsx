import React from 'react';

import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';

import { useRouter } from 'next/router';

import Text from 'components/Text';

import { Anchor, ListItem, Bar } from './styles';

interface Props {
  href: string;
  children: string;
  onClick?: () => void;
}

const Item = ({ children, href, onClick }: Props) => {
  const router = useRouter();
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
            animate={{ width: '100%' }}
            exit={{ width: 0 }}
            initial={{ width: 0 }}
            key="bar"
            transition={{ type: 'tween', duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </ListItem>
  );
};

export default Item;