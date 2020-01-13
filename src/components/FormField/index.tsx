import React from 'react';

import Text from '../Text';

import { Container, Label, Contents } from './styles';

interface Props {
  label: String;
  children: React.ReactNode;
}

const FormField = ({ label, children }: Props) => (
  <Container>
    <Label>
      <Text color="darkPlatinum" weight="bold">
        {label}
      </Text>
    </Label>
    <Contents>{children}</Contents>
  </Container>
);

export default FormField;
