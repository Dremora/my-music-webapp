import React from 'react';

import Text from '../Text';

import { Container, Label, Contents } from './styles';

interface Props {
  label: String;
  children: React.ReactNode;
}

export default ({ label, children }: Props) => (
  <Container>
    <Label>
      <Text color="darkPlatinum">{label}</Text>
    </Label>
    <Contents>{children}</Contents>
  </Container>
);
