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
              <div class="card-header bg-success text-white">Реєстрація користувача</div>
              <div class="card-body">
                <form @submit.prevent="register">
                  <div class="form-group mb-3">
                    <label for="name">Ім'я</label>
                    <input type="text" class="form-control" id="name" v-model="name" placeholder="Введіть ваше ім'я">
                  </div>
                  <div class="form-group mb-3">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" v-model="email" placeholder="Введіть ваш email">
                  </div>
                  <div class="form-group mb-3">
                    <label for="password">Пароль</label>
                    <input type="password" class="form-control" id="password" v-model="password" placeholder="Введіть ваш пароль">
                  </div>
                  <div class="form-group mb-3">
                    <label for="gender">Стать</label>
                    <select class="form-control" id="gender" v-model="gender">
                      <option>Чоловік</option>
                      <option>Жінка</option>
                    </select>
                  </div>
                  <div class="form-group mb-3">
                    <label for="dob">Дата народження</label>
                    <input type="date" class="form-control" id="dob" v-model="dob">
                  </div>
                  <button type="submit" class="btn btn-success btn-block">Зареєструватися</button>
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
  import { register } from '@/services/authService';
  
  export default {
    name: 'RegistrationPage',
    data() {
      return {
        name: '',
        email: '',
        password: '',
        gender: '',
        dob: ''
      };
    },
    methods: {
      async register() {
        const response = register(this.name, this.email, this.password, this.gender, this.dob);
        alert(response.message);
        if (response.success) {
          this.$router.push('/login');
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
  