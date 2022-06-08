import React, { useCallback } from "react";

import StyledSelect from "./styles";

interface Props<T extends string> {
  children: React.ReactNode;
  disabled?: boolean;
  value: T | null;
  onChange: (value: T) => void;
}

function Select<T extends string>({ onChange, value, ...props }: Props<T>) {
  const onChangeHtmlEvent = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(e.target.value as T);
    },
    [onChange]
  );

  return (
    <StyledSelect value={value || ""} {...props} onChange={onChangeHtmlEvent} />
  );
}

export default Select;
