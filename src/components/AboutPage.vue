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
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header">Про додаток</div>
              <div class="card-body">
                <p>XenoLearn - це інноваційний додаток для вивчення іноземних слів. Він пропонує користувачам ефективні методи навчання, інтерактивні вправи та можливість контролювати свій прогрес. Додаток надає можливість персоналізації та адаптації навчання під потреби кожного користувача.</p>
                <p>Ми працюємо над тим, щоб зробити вивчення іноземних слів захоплюючим та ефективним для всіх користувачів.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="invisible-block"></div>
      </div>
      <div class="footer">
        &copy; 2024 XenoLearn. Усі права захищено. <a href="#">XenoLearn.kpi</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutPage'
  }
  </script>
  
  <style scoped>
  .card {
    border: 2px solid #28a745;
    border-radius: 10px;
  }
  .card-header {
    background-color: #28a745;
    color: #fff;
    font-weight: bold;
  }
  .card-body {
    padding: 20px;
  }
  .service-name {
    background-color: #28a745;
    color: #fff;
    padding: 10px;
    text-align: center;
    font-weight: bold;
  }
  .navbar-brand img {
    height: 30px;
    width: 30px;
    margin-right: 10px;
  }
  .green-line {
    border-top: 3px solid #28a745;
    margin-top: 20px;
  }
  </style>
  