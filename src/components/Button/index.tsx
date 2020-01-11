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

const Button = ({ type = 'button', palette = 'primary', size = 'medium', ...props }: Props) => (
  <StyledButton palette={palette} type={type} size={size} {...props} />
);

export default Button;
