import React from 'react';
import { Input as StyledInput, Textarea } from './styles';

const Input = ({ value, multiline = false, ...props }) =>
  multiline ? <Textarea value={value || ''} {...props} /> : <StyledInput type="text" value={value || ''} {...props} />;

export default Input;
