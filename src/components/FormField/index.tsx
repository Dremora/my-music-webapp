import React from "react";

import Text from "components/Text";

import { containerStyle, contentsStyle, labelStyle } from "./styles.css";

interface Props {
  label: string;
  children: React.ReactNode;
}

const FormField = ({ children, label }: Props) => (
  <label className={containerStyle}>
    <div className={labelStyle}>
      <Text color="darkPlatinum" weight="bold">
        {label}
      </Text>
    </div>
    <div className={contentsStyle}>{children}</div>
  </label>
);

export default FormField;
