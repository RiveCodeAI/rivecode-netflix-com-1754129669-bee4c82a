export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};

export const validateFormField = (
  value: string,
  type: 'email' | 'password' | 'text'
): { isValid: boolean; message: string } => {
  switch (type) {
    case 'email':
      return {
        isValid: validateEmail(value),
        message: validateEmail(value) ? '' : 'Please enter a valid email address'
      };
    case 'password':
      return {
        isValid: validatePassword(value),
        message: validatePassword(value) ? '' : 'Password must be at least 6 characters'
      };
    default:
      return {
        isValid: value.length > 0,
        message: value.length > 0 ? '' : 'This field is required'
      };
  }
};