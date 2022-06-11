import { buttonStyle } from "./styles.css";

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: "button" | "submit";
  palette?: "primary" | "secondary" | "link";
  size?: "medium" | "small";
  full?: boolean;
}

const Button = ({
  full,
  palette,
  size = "medium",
  type = "button",
  ...props
}: Props) => (
  <button
    className={buttonStyle({ full, disabled: props.disabled, size, palette })}
    type={type}
    {...props}
  />
);

export default Button;
