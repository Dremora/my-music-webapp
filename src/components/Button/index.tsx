import React from 'react';

import StyledButton from './styles';

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: 'button' | 'submit';
  palette?: 'primary' | 'secondary' | 'link';
  size?: 'medium' | 'small';
}

const Button = ({ palette = 'primary', size = 'medium', type = 'button', ...props }: Props) => (
  <StyledButton palette={palette} size={size} type={type} {...props} />
);

export default Button;
