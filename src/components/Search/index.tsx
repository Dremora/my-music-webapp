import React from 'react';
import searchImage from './search.svg';

import { Root, Image, Input } from './styles';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default ({ value, onChange }: Props) => (
  <Root>
    <Image src={searchImage} width={20} height={20} />
    <Input placeholder="Search for music…" value={value} onChange={e => onChange(e.target.value)} />
  </Root>
);
