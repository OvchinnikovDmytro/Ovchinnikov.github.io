import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import LearnOne from '../components/LearnOne.vue';
import LearnTwo from '../components/LearnTwo.vue';
import LearnThree from '../components/LearnThree.vue';
import LearnFour from '../components/LearnFour.vue';
import LoginPage from '../components/LoginPage.vue';
import RegistrationPage from '../components/RegistrationPage.vue';
import UserProfile from '../components/UserProfile.vue';
import AboutPage from '../components/AboutPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/learn1',
    name: 'LearnOne',
    component: LearnOne
  },
  {
    path: '/learn2',
    name: 'LearnTwo',
    component: LearnTwo
  },
  {
    path: '/learn3',
    name: 'LearnThree',
    component: LearnThree
  },
  {
    path: '/learn4',
    name: 'LearnFour',
    component: LearnFour
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/registration',
    name: 'RegistrationPage',
    component: RegistrationPage
  },
  {
    path: '/profile',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
