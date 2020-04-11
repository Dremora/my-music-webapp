import React, { useCallback } from "react";

import { Image, Input, Root } from "./styles";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const Search = ({ onChange, value }: Props) => {
  const updateValue = useCallback((e) => onChange(e.target.value), [onChange]);

  return (
    <Root>
      <Image height={20} src="/search.svg" width={20} />
      <Input
        onChange={updateValue}
        placeholder="Search for music…"
        value={value}
      />
    </Root>
  );
};

export default Search;
