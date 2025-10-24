export const validateForm = (email: string, password: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  let emailHasError = false
  let emailMessage = ""
  let passwordHasError = false
  let passwordMessage = ""

  if (!email.trim()) {
    emailHasError = true
    emailMessage = "Please enter an email"
  } else {
    if (!emailRegex.test(email)) {
      emailHasError = true
      emailMessage = "Please enter a valid email"
    }
  }

  if (!password.trim()) {
    passwordHasError = true;
    passwordMessage = "Please enter a password"
  } else if (password.length < 8) {
    passwordHasError = true
    passwordMessage = "Password should be at least 8 letters"
  }

  return {
    emailHasError,
    emailMessage,
    passwordHasError,
    passwordMessage,
    isValid: !emailHasError && !passwordHasError
  }
}
