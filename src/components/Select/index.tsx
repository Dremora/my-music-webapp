import React from 'react';

import StyledSelect from './styles';

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  value: string;
}

const Select = ({ value, ...props }: Props) => <StyledSelect value={value || ''} {...props} />;

export default Select;
