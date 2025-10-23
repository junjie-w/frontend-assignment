// Style
import { FunctionComponent, useState } from "react";
import "./index.scss";

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

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    let emailHasError = false;
    let emailMessage = "";
    let passwordHasError = false;
    let passwordMessage = "";

    if (!email.trim()) {
      emailHasError = true;
      emailMessage = "Please enter an email";
    } else {
      if (!emailRegex.test(email)) {
        emailHasError = true;
        emailMessage = "Please enter a valid email";
      }
    }

    if (!password.trim()) {
      passwordHasError = true;
      passwordMessage = "Please enter a password";
    } else if (password.length < 8) {
      passwordHasError = true;
      passwordMessage = "Password should be at least 8 letters";
    }

    setEmailError(emailHasError);
    setEmailErrorMessage(emailMessage);
    setPasswordError(passwordHasError);
    setPasswordErrorMessage(passwordMessage);

    return !emailHasError && !passwordHasError;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
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
