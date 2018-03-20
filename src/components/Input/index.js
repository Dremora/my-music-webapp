import React from 'react';
import StyledInput from './styles';

const Input = ({ value, form, ...props }) => <StyledInput type="text" value={value || ''} {...props} />;

export default Input;
