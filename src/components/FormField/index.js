import React from 'react';

import Text from '../Text';

import { Container, Label, Contents } from './styles';

export default ({ label, children }) => (
  <Container>
    <Label>
      <Text color="darkPlatinum">{label}</Text>
    </Label>
    <Contents>{children}</Contents>
  </Container>
);
