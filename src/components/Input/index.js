import React from 'react';
import StyledInput from './styles';

const Input = ({ field: { value, ...field }, form, ...props }) => (
  <StyledInput type="text" value={value || ''} {...field} {...props} />
);

export default Input;
