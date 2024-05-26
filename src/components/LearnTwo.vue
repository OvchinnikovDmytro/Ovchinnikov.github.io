<template>
    <div>
      <nav class="navbar navbar-expand-md navbar-light bg-success sticky-top">
        <div class="container-fluid">
          <router-link to="/" class="navbar-brand">
            <img src="img/logo.png" alt="XenoLearn">
            XenoLearn
          </router-link>
          <div class="mx-auto">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <router-link to="/" class="nav-link text-white">Головна сторінка</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/profile" class="nav-link text-white">Профіль</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link text-white">Про нас</router-link>
              </li>
            </ul>
          </div>
          <ul class="navbar-nav">
            <li class="nav-item-sgn">
              <router-link to="/login" class="nav-link text-white">Увійти</router-link>
            </li>
            <li class="nav-item-sgn">
              <router-link to="/registration" class="nav-link text-white">Зареєструватись</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <h1>Present Simple Test</h1>
        <form id="quizForm">
          <div class="question">
            <p>1. What is the third person singular form of the verb "to go"?</p>
            <input type="radio" name="q1" value="a"> a) goes<br>
            <input type="radio" name="q1" value="b"> b) go<br>
            <input type="radio" name="q1" value="c"> c) going<br>
          </div>
          <div class="question">
            <p>2. Which sentence is in the present simple tense?</p>
            <input type="radio" name="q2" value="a"> a) She is going to the store.<br>
            <input type="radio" name="q2" value="b"> b) She goes to the store every day.<br>
            <input type="radio" name="q2" value="c"> c) She went to the store yesterday.<br>
          </div>
          <div class="question">
            <p>3. What is the present simple form of the verb "to eat"?</p>
            <input type="radio" name="q3" value="a"> a) eats<br>
            <input type="radio" name="q3" value="b"> b) eating<br>
            <input type="radio" name="q3" value="c"> c) ate<br>
          </div>
          <div class="question">
            <p>4. Which sentence is in the present simple tense?</p>
            <input type="radio" name="q4" value="a"> a) They are watching a movie.<br>
            <input type="radio" name="q4" value="b"> b) They watch movies every weekend.<br>
            <input type="radio" name="q4" value="c"> c) They watched a movie last night.<br>
          </div>
          <div class="question">
            <p>5. What is the present simple form of the verb "to write"?</p>
            <input type="radio" name="q5" value="a"> a) writes<br>
            <input type="radio" name="q5" value="b"> b) writing<br>
            <input type="radio" name="q5" value="c"> c) wrote<br>
          </div>
          <button type="button" @click="checkAnswers">Подати відповіді</button>
        </form>
        <div id="result" style="margin-top: 20px; font-style: oblique; font-size: 20px;"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LearnTwo',
    methods: {
      checkAnswers() {
        const answers = {
          q1: "a",
          q2: "b",
          q3: "a",
          q4: "b",
          q5: "a"
        };
        let score = 0;
        for (const key in answers) {
          if (document.querySelector(`input[name="${key}"]:checked`)) {
            if (document.querySelector(`input[name="${key}"]:checked`).value === answers[key]) {
              score++;
            }
          }
        }
        const result = document.getElementById("result");
        result.innerHTML = `Ваш результат: ${score}/5`;
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }
  </style>
  