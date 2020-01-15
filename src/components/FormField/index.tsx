import React from 'react';

import Text from 'components/Text';

import { Container, Label, Contents } from './styles';

interface Props {
  label: string;
  children: React.ReactNode;
}

const FormField = ({ children, label }: Props) => (
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
