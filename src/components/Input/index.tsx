import React from 'react';
import { Input as StyledInput, Textarea } from './styles';

interface Props {
  disabled?: boolean;
  value: string;
  multiline?: boolean;
  placeholder?: string;
}

const Input = ({ value, multiline = false, ...props }: Props) =>
  multiline ? <Textarea value={value || ''} {...props} /> : <StyledInput type="text" value={value || ''} {...props} />;

export default Input;
