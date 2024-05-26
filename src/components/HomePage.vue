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
            <div class="lesson-title">Урок 1: Past Simple</div>
            <div class="lesson-description">
              <p><strong>Past Simple</strong> - це час в англійській мові, який використовується для опису подій або дій, які відбулися в минулому та вже завершилися.</p>
              <p>Для утворення речень в Past Simple використовується форма дієслова, яка закінчується на -ed для регулярних дієслів.</p>
              <div class="text-center mt-3">
                <router-link to="/learn1" class="btn btn-lg">Почати навчання</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-5">
          <div class="col-md-6">
            <div class="lesson-title">Урок 2: Present Simple</div>
            <div class="lesson-description">
              <p><strong>Present Simple</strong> - це час в англійській мові, який використовується для опису повсякденних подій, рутини, фактів або звичок.</p>
              <p>Для утворення речень в Present Simple використовується базова форма дієслова.</p>
              <div class="text-center mt-3">
                <router-link to="/learn2" class="btn btn-lg">Почати навчання</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-5">
          <div class="col-md-6">
            <div class="lesson-title">Урок 3: Present Continuous</div>
            <div class="lesson-description">
              <p><strong>Present Continuous</strong> - це час в англійській мові, який використовується для опису дій, що відбуваються в момент розмови або певних подій, які тимчасово відбуваються.</p>
              <p>Для утворення речень в Present Continuous використовується форма допоміжного дієслова "to be" в поточному часі та дієслово з закінченням -ing.</p>
              <div class="text-center mt-3">
                <router-link to="/learn3" class="btn btn-lg">Почати навчання</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-5">
          <div class="col-md-6">
            <div class="lesson-title">Урок 4: Future Simple</div>
            <div class="lesson-description">
              <p><strong>Future Simple</strong> - це час в англійській мові, який використовується для опису майбутніх подій, планів або припущень.</p>
              <p>Для утворення речень в Future Simple використовується допоміжне дієслово "will" та базова форма дієслова.</p>
              <div class="text-center mt-3">
                <router-link to="/learn4" class="btn btn-lg">Почати навчання</router-link>
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
    name: 'HomePage'
  };
  </script>
  
  <style scoped>
  .lesson-title {
    background-color: #28a745;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    padding: 20px;
    border-radius: 10px 10px 0 0;
  }
  .lesson-description {
    background-color: #fff;
    border: 2px solid #28a745;
    border-top: none;
    border-radius: 0 0 10px 10px;
    padding: 20px;
  }
  .btn {
    background-color: #28a745;
    color: #fff;
    border: none;
  }
  .btn:hover {
    background-color: #218838;
  }
  </style>
  