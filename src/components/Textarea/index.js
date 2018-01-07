import React from 'react';
import StyledTextarea from './styles';

const Textarea = ({ field: { value, ...field }, form, ...props }) => (
  <StyledTextarea type="text" value={value || ''} {...field} {...props} />
);

export default Textarea;
