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
        <h1>Present Continuous Test</h1>
        <form id="quizForm">
          <div class="question">
            <p>1. What is she doing right now?</p>
            <input type="radio" name="q1" value="a"> a) She drinks coffee.<br>
            <input type="radio" name="q1" value="b"> b) She is drinking coffee.<br>
            <input type="radio" name="q1" value="c"> c) She will drink coffee.<br>
          </div>
          <div class="question">
            <p>2. Where are they going?</p>
            <input type="radio" name="q2" value="a"> a) They go to the park.<br>
            <input type="radio" name="q2" value="b"> b) They are going to the park.<br>
            <input type="radio" name="q2" value="c"> c) They went to the park.<br>
          </div>
          <div class="question">
            <p>3. Why is he laughing?</p>
            <input type="radio" name="q3" value="a"> a) He laughs at the joke.<br>
            <input type="radio" name="q3" value="b"> b) He is laughing at the joke.<br>
            <input type="radio" name="q3" value="c"> c) He will laugh at the joke.<br>
          </div>
          <div class="question">
            <p>4. What is she saying?</p>
            <input type="radio" name="q4" value="a"> a) She says hello.<br>
            <input type="radio" name="q4" value="b"> b) She is saying hello.<br>
            <input type="radio" name="q4" value="c"> c) She said hello.<br>
          </div>
          <div class="question">
            <p>5. Who is playing the piano?</p>
            <input type="radio" name="q5" value="a"> a) He plays the piano.<br>
            <input type="radio" name="q5" value="b"> b) He is playing the piano.<br>
            <input type="radio" name="q5" value="c"> c) He played the piano.<br>
          </div>
          <button type="button" @click="checkAnswers">Подати відповіді</button>
        </form>
        <div id="result" style="margin-top: 20px; font-style: oblique; font-size: 20px;"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LearnThree',
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
  