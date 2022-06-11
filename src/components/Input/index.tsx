import { inputStyle } from "./styles.css";

interface Props {
  autoFocus?: boolean;
  disabled?: boolean;
  multiline?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  type?: string;
  value: string;
}

const Input = ({ multiline = false, type = "text", value, ...props }: Props) =>
  multiline ? (
    <textarea className={inputStyle} value={value || ""} {...props} />
  ) : (
    <input className={inputStyle} type={type} value={value || ""} {...props} />
  );

export default Input;
