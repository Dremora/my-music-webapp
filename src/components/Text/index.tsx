import React from 'react';

import StyledText from './styles';

interface Props {
  children: React.ReactNode;
  color: string;
  size?: 'small' | 'base' | 'medium' | 'large';
  weight?: 'normal' | 'bold';
}

const Text = ({ children, color, size = 'base', weight = 'normal' }: Props) => (
  <StyledText color={color} size={size} weight={weight}>
    {children}
  </StyledText>
);

export default Text;
