// @flow

import React from 'react';
import searchImage from './search.svg';

import { Root, Image, Input } from './styles';

export default ({ value, onChange }: { value: string, onChange: string => void }) => (
  <Root>
    <Image src={searchImage} />
    <Input placeholder="Search for music…" value={value} onChange={e => onChange(e.target.value)} />
  </Root>
);
