import React from 'react';
import StyledTextarea from './Styles';

const Textarea = ({ field: { value, ...field }, form, ...props }) => (
  <StyledTextarea type="text" value={value || ''} {...field} {...props} />
);

export default Textarea;
