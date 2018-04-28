import React from 'react';
import StyledButton from './styles';

const Button = ({ type = 'button', palette = 'primary', size = 'medium', ...props }) => (
  <StyledButton palette={palette} type={type} size={size} {...props} />
);

export default Button;
