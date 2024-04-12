// Function to validate email format
export const validateEmail = (email: string): boolean => {
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  return isValid;
};

// Function to check password strength
export const checkPasswordStrength = (password: string): boolean => {
  const strongRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
  return strongRegex.test(password);
};

// Check if the password contains a special character
export const hasSpecialCharacter = (password: string): boolean => {
  const specialRegex = /[!@#$%^&*]/;
  return specialRegex.test(password);
};

// Check if the password contains a number
export const hasNumber = (password: string): boolean => {
  const numberRegex = /[0-9]/;
  return numberRegex.test(password);
};

// Check if the password contains a lowercase letter
export const hasLowercaseLetter = (password: string): boolean => {
  const lowercaseRegex = /[a-z]/;
  return lowercaseRegex.test(password);
};

// Check if the password contains an uppercase letter
export const hasUppercaseLetter = (password: string): boolean => {
  const uppercaseRegex = /[A-Z]/;
  return uppercaseRegex.test(password);
};

export const validateField = (
  name: string,
  value: string,
  formData: {[key: string]: any},
  setError: (error: string) => void,
  setFocused: (isFocused: boolean) => void,
) => {
  if (value !== "") {
    setFocused(true);
  }
  switch (name) {
    case "email":
      if (value !== "") {
        const isValid = validateEmail(value);
        if (!isValid) {
          setError("Invalid email format");
        } else {
          setError("");
        }
      }
      break;
    case "password":
      if (value !== "") {
        const isStrong = checkPasswordStrength(value);
        if (!isStrong) {
          let errorMessage = "Password must contain ";
          if (!hasSpecialCharacter(value)) {
            errorMessage += " one special character ";
          }
          if (!hasNumber(value)) {
            errorMessage += " one number ";
          }
          if (!hasLowercaseLetter(value)) {
            errorMessage += " one lowercase letter ";
          }
          if (!hasUppercaseLetter(value)) {
            errorMessage += " one uppercase letter ";
          }
          if (value.length < 8) {
            errorMessage += " more than 8 characters ";
          }
          if (errorMessage !== "Password must contain a ") {
            setError(errorMessage);
          } else {
            setError("");
          }
        } else {
          setError("");
        }
      }
      break;
    case "confirm_password":
      if (value !== "" && value !== formData.password) {
        setError("The passwords do not match");
      } else {
        setError("");
      }
      break;
    default:
      break;
  }
};
