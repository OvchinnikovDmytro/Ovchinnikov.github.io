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
        <h1>Past Simple Test</h1>
        <form id="quizForm">
          <div class="question">
            <p>1. What is the past simple form of the verb "play"?</p>
            <input type="radio" name="q1" value="a"> a) played<br>
            <input type="radio" name="q1" value="b"> b) play<br>
            <input type="radio" name="q1" value="c"> c) plays<br>
          </div>
          <div class="question">
            <p>2. Which sentence is in the past simple tense?</p>
            <input type="radio" name="q2" value="a"> a) She is playing soccer.<br>
            <input type="radio" name="q2" value="b"> b) She played soccer yesterday.<br>
            <input type="radio" name="q2" value="c"> c) She plays soccer every day.<br>
          </div>
          <div class="question">
            <p>3. What is the past simple form of the verb "study"?</p>
            <input type="radio" name="q3" value="a"> a) studied<br>
            <input type="radio" name="q3" value="b"> b) studying<br>
            <input type="radio" name="q3" value="c"> c) studies<br>
          </div>
          <div class="question">
            <p>4. Which sentence is in the past simple tense?</p>
            <input type="radio" name="q4" value="a"> a) They are watching a movie.<br>
            <input type="radio" name="q4" value="b"> b) They watched a movie last night.<br>
            <input type="radio" name="q4" value="c"> c) They watch movies often.<br>
          </div>
          <div class="question">
            <p>5. What is the past simple form of the verb "eat"?</p>
            <input type="radio" name="q5" value="a"> a) ate<br>
            <input type="radio" name="q5" value="b"> b) eaten<br>
            <input type="radio" name="q5" value="c"> c) eating<br>
          </div>
          <button type="button" @click="checkAnswers">Відправити</button>
        </form>
        <div id="result" style="margin-top: 20px; font-style: oblique; font-size: 20px;"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LearnOne',
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
  