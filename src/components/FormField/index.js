import React from 'react';

import { Container, Label, Contents } from './styles';

export default ({ label, children }) => (
  <Container>
    <Label>{label}</Label>
    <Contents>{children}</Contents>
  </Container>
);
