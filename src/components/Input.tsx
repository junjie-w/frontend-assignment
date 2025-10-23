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
  value?: string
  onChange?: (value: string) => void
  onAdd?: (text: string) => void
  placeholder?: string
  icon?: string
  showAddButton?: boolean
}

const Input: FunctionComponent<InputProps> = ({ 
  value = '', 
  onChange, 
  onAdd,
  placeholder = '',
  icon,
  showAddButton = false
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!value.trim() || !onAdd) return
    
    onAdd(value.trim())
  };

  return (
    <form className="input-container" onSubmit={handleSubmit}>
      <input
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        aria-label={placeholder}
      />
      {icon && <div className="input-icon">{icon}</div>}
      {showAddButton && (
        <button type="submit" className="add-btn">Add</button>
      )}
    </form>
  );
};

export default Input;
