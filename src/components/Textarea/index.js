import React from 'react';
import StyledTextarea from './styles';

const Textarea = ({ value, form, ...props }) => <StyledTextarea type="text" value={value || ''} {...props} />;

export default Textarea;
