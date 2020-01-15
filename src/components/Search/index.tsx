import React from 'react';

import { Root, Image, Input } from './styles';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const Search = ({ value, onChange }: Props) => (
  <Root>
    <Image src="/search.svg" width={20} height={20} />
    <Input placeholder="Search for music…" value={value} onChange={e => onChange(e.target.value)} />
  </Root>
);

export default Search;
