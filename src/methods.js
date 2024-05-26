import { login, register } from '@/services/authService';

export function handleLogin() {
  return (email, password) => {
    const response = login(email, password);
    alert(response.message);
    return response.success;
  };
}

export function handleRegistration() {
  return (name, email, password, gender, dob) => {
    const response = register(name, email, password, gender, dob);
    alert(response.message);
    return response.success;
  };
}

export function handleProfile() {
  return () => {
    const isLog = sessionStorage.getItem('logged');
    if (isLog == 1) {
      return {
        name: sessionStorage.getItem('name'),
        email: sessionStorage.getItem('email'),
        gender: sessionStorage.getItem('gender'),
        dob: sessionStorage.getItem('dob')
      };
    } else {
      return null;
    }
  };
}
