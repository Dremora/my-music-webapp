import React from 'react';
import StyledSelect from './styles';

const Select = ({ field: { value, ...field }, form, ...props }) => (
  <StyledSelect type="text" value={value || ''} {...field} {...props} />
);

export default Select;
