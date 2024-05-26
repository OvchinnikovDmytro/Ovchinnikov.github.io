export function register(name, email, password, gender, dob) {
    let raw = localStorage.getItem('users');
    let users = raw ? JSON.parse(raw) : [];
  
    function isEmailExist(email) {
      return users.some(user => user.email === email);
    }
  
    if (isEmailExist(email)) {
      return { success: false, message: 'Такий email вже зареєстрований' };
    } else {
      let newUser = {
        name,
        email,
        password,
        gender,
        dob: String(dob)
      };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      return { success: true, message: 'Ви зареєструвалися!' };
    }
  }
  
  export function login(email, password) {
    let raw = localStorage.getItem('users');
    let users = JSON.parse(raw);
  
    function isEmailExist(email) {
      return users.some(user => user.email === email);
    }
  
    if (isEmailExist(email)) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
          if (users[i].password === password) {
            sessionStorage.setItem('logged', '1');
            sessionStorage.setItem('name', users[i].name);
            sessionStorage.setItem('email', users[i].email);
            sessionStorage.setItem('gender', users[i].gender);
            sessionStorage.setItem('dob', users[i].dob);
            return { success: true, message: 'Ласкаво просимо!' };
          } else {
            return { success: false, message: 'Невірний пароль' };
          }
        }
      }
    } else {
      return { success: false, message: 'Такий email не зареєстрований' };
    }
  }
  