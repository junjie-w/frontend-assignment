import { FunctionComponent } from "react";
import './Input.scss';

/*
 * The InputProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the InputProps interface
 */

interface InputProps {
  value: string
  onChange: (value: string) => void
  placeholder: string
  icon?: string
}

const Input: FunctionComponent<InputProps> = ({ 
  value, 
  onChange, 
  placeholder,
  icon
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className="input-container">
      <input
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        aria-label={placeholder}
      />
      {icon && <div className="input-icon">{icon}</div>}
    </div>
  );
};

export default Input;
