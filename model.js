function reg()
{
    let name_s = document.getElementById("name").value;
    let email_s = document.getElementById("email").value;
    let pass_s = document.getElementById("password").value;
    let gender_s = document.getElementById("gender").value;
    let dob_s = String(document.getElementById("dob").value);

    let raw = localStorage.getItem("users");
    let users = raw ? JSON.parse(raw) : [];

    function isEmailExist(email){
        return users.some((user) => user.email === email);
    }

      if (isEmailExist(email_s)) {
        alert("Такий email вже зареєстрований");
        return;
      }
      else{
        let newUser = { 
            name: name_s, 
            email: email_s, 
            pass: pass_s,
            gender: gender_s,
            dob: dob_s
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
    
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            console.log(`${key}: ${value}`);
          }

        alert("Ви зареєструвалися!");
      }
}  

function log()
{
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    let raw = localStorage.getItem("users");
    let users = JSON.parse(raw);

    function isEmailExist(email){
        return users.some((user) => user.email === email);
    }

      if (isEmailExist(email)) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                if(users[i].pass === pass){
                    alert("Ласкаво просимо!");
                    sessionStorage.setItem('logged', '1');
                    sessionStorage.setItem('name', users[i].name);
                    sessionStorage.setItem('email', users[i].email);
                    sessionStorage.setItem('gender', users[i].gender);
                    sessionStorage.setItem('dob', users[i].dob);
                }
                else{
                    alert("Невірний пароль");
                    break;
                }
            }
          }
      }
      else{
        alert("Такий email не зареєстрований");
      }
}   

function checkAnswers1() {
  var answers = {
      q1: "a",
      q2: "b",
      q3: "a",
      q4: "b",
      q5: "a"
  };

  var score = 0;
  for (var key in answers) {
      if (document.querySelector('input[name="' + key + '"]:checked')) {
          if (document.querySelector('input[name="' + key + '"]:checked').value === answers[key]) {
              score++;
          }
      }
  }

  var result = document.getElementById("result");
  result.innerHTML = "Ваш результат: " + score + "/5";
}

function checkAnswers2() {
  var answers = {
      q1: "a",
      q2: "b",
      q3: "a",
      q4: "b",
      q5: "a"
  };

  var score = 0;
  for (var key in answers) {
      if (document.querySelector('input[name="' + key + '"]:checked')) {
          if (document.querySelector('input[name="' + key + '"]:checked').value === answers[key]) {
              score++;
          }
      }
  }

  var result = document.getElementById("result");
  result.innerHTML = "Ваш результат: " + score + "/5";
}

function checkAnswers3() {
    var answers = {
        q1: "b",
        q2: "b",
        q3: "b",
        q4: "b",
        q5: "b"
    };
  
    var score = 0;
    for (var key in answers) {
        if (document.querySelector('input[name="' + key + '"]:checked')) {
            if (document.querySelector('input[name="' + key + '"]:checked').value === answers[key]) {
                score++;
            }
        }
    }
  
    var result = document.getElementById("result");
    result.innerHTML = "Ваш результат: " + score + "/5";
}

function checkAnswers4() {
    var answers = {
        q1: "c",
        q2: "a",
        q3: "b",
        q4: "b",
        q5: "b"
    };
  
    var score = 0;
    for (var key in answers) {
        if (document.querySelector('input[name="' + key + '"]:checked')) {
            if (document.querySelector('input[name="' + key + '"]:checked').value === answers[key]) {
                score++;
            }
        }
    }
  
    var result = document.getElementById("result");
    result.innerHTML = "Ваш результат: " + score + "/5";
}