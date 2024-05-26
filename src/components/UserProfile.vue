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
              <div class="card-header bg-success text-white">Профіль користувача</div>
              <div class="card-body">
                <div class="text-center mb-3">
                  <img src="img/profilePic.jpg" alt="Avatar" class="avatar img-thumbnail" width="100px" height="100px">
                </div>
                <form>
                  <div class="form-group mb-3">
                    <input type="file" class="form-control" id="avatar" accept="image/*">
                  </div>
                  <table class="table">
                    <tbody>
                      <tr>
                        <th scope="row">Ім'я</th>
                        <td>{{ profile.name }}</td>
                      </tr>
                      <tr>
                        <th scope="row">Email</th>
                        <td>{{ profile.email }}</td>
                      </tr>
                      <tr>
                        <th scope="row">Стать</th>
                        <td>{{ profile.gender }}</td>
                      </tr>
                      <tr>
                        <th scope="row">Дата народження</th>
                        <td>{{ profile.dob }}</td>
                      </tr>
                    </tbody>
                  </table>
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
  import { handleProfile } from '@/methods';
  
  export default {
    name: 'UserProfile',
    data() {
      return {
        profile: {
          name: '',
          email: '',
          gender: '',
          dob: ''
        }
      };
    },
    methods: {
      fetchProfile() {
        const profile = handleProfile()();
        if (profile) {
          this.profile = profile;
        }
      }
    },
    mounted() {
      this.fetchProfile();
    }
  };
  </script>
  
  <style scoped>
  .avatar {
    max-width: 150px;
    max-height: 150px;
    border-radius: 50%;
  }
  </style>
  