import React from 'react';
import StyledButton from './styles';

const Button = ({ type = 'button', ...props }) => <StyledButton type={type} {...props} />;

export default Button;
