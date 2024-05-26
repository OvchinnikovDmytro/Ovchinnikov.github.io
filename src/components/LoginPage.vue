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
              <div class="card-header bg-success text-white">Вхід до сайту</div>
              <div class="card-body">
                <form @submit.prevent="login">
                  <div class="form-group mb-3">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" v-model="email" placeholder="Введіть ваш email">
                  </div>
                  <div class="form-group mb-3">
                    <label for="password">Пароль</label>
                    <input type="password" class="form-control" id="password" v-model="password" placeholder="Введіть ваш пароль">
                  </div>
                  <button type="submit" class="btn btn-success btn-block">Увійти</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="invisible-block"></div>
      </div>
      <div class="footer bg-dark text-white text-center py-3">
        &copy; 2024 XenoLearn. Усі права захищено. <a href="#" class="text-white">XenoLearn.kpi</a>
      </div>
    </div>
  </template>
  
  <script>
  import { login } from '@/services/authService';
  
  export default {
    name: 'LoginPage',
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async login() {
        const response = login(this.email, this.password);
        alert(response.message);
        if (response.success) {
          this.$router.push('/');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .form-control {
    border-color: #28a745;
  }
  </style>
  