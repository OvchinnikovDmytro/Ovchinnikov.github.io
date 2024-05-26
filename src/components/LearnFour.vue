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
        <h1>Future Simple Test</h1>
        <form id="quizForm">
          <div class="question">
            <p>1. What will you do tomorrow?</p>
            <input type="radio" name="q1" value="a"> a) I'm going to sleep.<br>
            <input type="radio" name="q1" value="b"> b) I'll sleep.<br>
            <input type="radio" name="q1" value="c"> c) I sleep.<br>
          </div>
          <div class="question">
            <p>2. Where will they travel next summer?</p>
            <input type="radio" name="q2" value="a"> a) They're going to travel to Italy.<br>
            <input type="radio" name="q2" value="b"> b) They'll travel to Italy.<br>
            <input type="radio" name="q2" value="c"> c) They travel to Italy.<br>
          </div>
          <div class="question">
            <p>3. Who will win the game?</p>
            <input type="radio" name="q3" value="a"> a) They win the game.<br>
            <input type="radio" name="q3" value="b"> b) They'll win the game.<br>
            <input type="radio" name="q3" value="c"> c) They're going to win the game.<br>
          </div>
          <div class="question">
            <p>4. What will she buy at the store?</p>
            <input type="radio" name="q4" value="a"> a) She's going to buy groceries.<br>
            <input type="radio" name="q4" value="b"> b) She'll buy groceries.<br>
            <input type="radio" name="q4" value="c"> c) She buys groceries.<br>
          </div>
          <div class="question">
            <p>5. How will you celebrate your birthday?</p>
            <input type="radio" name="q5" value="a"> a) I celebrate with my friends.<br>
            <input type="radio" name="q5" value="b"> b) I'm going to celebrate with my friends.<br>
            <input type="radio" name="q5" value="c"> c) I'll celebrate with my friends.<br>
          </div>
          <button type="button" @click="checkAnswers">Подати відповіді</button>
        </form>
        <div id="result" style="margin-top: 20px; font-style: oblique; font-size: 20px;"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LearnFour',
    methods: {
      checkAnswers() {
        const answers = {
          q1: "b",
          q2: "b",
          q3: "b",
          q4: "b",
          q5: "b"
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
  