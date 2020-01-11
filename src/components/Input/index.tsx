import React from 'react';
import { Input as StyledInput, Textarea } from './styles';

interface Props {
  autoFocus?: boolean;
  disabled?: boolean;
  multiline?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  type?: string;
  value: string;
}

const Input = ({ value, multiline = false, type = 'text', ...props }: Props) =>
  multiline ? <Textarea value={value || ''} {...props} /> : <StyledInput type={type} value={value || ''} {...props} />;

export default Input;
