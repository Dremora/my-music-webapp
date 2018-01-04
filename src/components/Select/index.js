import React from 'react';
import StyledSelect from './Styles';

const Select = ({ field: { value, ...field }, form, ...props }) => (
  <StyledSelect type="text" value={value || ''} {...field} {...props} />
);

export default Select;
