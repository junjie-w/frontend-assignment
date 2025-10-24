// Style
import { FunctionComponent, useState } from "react";
import "./index.scss";
import { validateForm } from "../helpers";

const Task1: FunctionComponent = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [emailErrorMessage, setEmailErrorMessage] = useState("")
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("")

  const clearEmailError = () => {
    setEmailError(false)
    setEmailErrorMessage("")
  };

  const clearPasswordError = () => {
    setPasswordError(false)
    setPasswordErrorMessage("")
  };

  const clearAllErrors = () => {
    clearEmailError()
    clearPasswordError()
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value)
    clearEmailError()
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
    clearPasswordError()
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = validateForm(email, password);
    setEmailError(validation.emailHasError);
    setEmailErrorMessage(validation.emailMessage);
    setPasswordError(validation.passwordHasError);
    setPasswordErrorMessage(validation.passwordMessage);
    
    if (validation.isValid) {
      alert(`Email: ${email} \nPassword: ${password}`);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div id="task-1">
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input
          name="email"
          autoFocus
          onChange={handleEmailChange}
          onBlur={clearEmailError}
          value={email}
          className={emailError ? 'error' : ''}
        />
        {emailErrorMessage && <div className="error-message">{emailErrorMessage}</div>}
        
        <label>Password</label>
        <input
          name="password"
          type="password"
          onChange={handlePasswordChange}
          onBlur={clearPasswordError}
          value={password}
          className={passwordError ? 'error' : ''}
        />
        {passwordErrorMessage && <div className="error-message">{passwordErrorMessage}</div>}
        
        <button 
          type="submit"
          onBlur={clearAllErrors}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Task1;
