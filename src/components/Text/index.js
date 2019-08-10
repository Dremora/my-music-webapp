import React from 'react';

import StyledText from './styles';

const Text = ({ children, color, size = 'base', weight = 'normal' }) => (
  <StyledText color={color} size={size} weight={weight}>
    {children}
  </StyledText>
);

export default Text;
