<template>
    <div id="app">
      <router-view />
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'
  };
  </script>
  
  <style>
  body {
    background-color: #f8f9fa;
  }
  
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #343a40;
    color: #fff;
    text-align: center;
    padding: 10px 0;
  }
  
  .navbar-brand img {
    height: 30px;
    width: 30px;
    margin-right: 10px;
  }
  
  .invisible-block {
    height: 50px;
    opacity: 0;
  }
  
  nav.navbar {
    border-bottom: 2px solid #000;
  }
  
  li.nav-item .nav-link {
    background-color: #28a745;
    font-weight: bold;
    color: #fff !important;
    padding: 10px;
    border-radius: 5px;
    margin: 0 5px;
  }
  
  li.nav-item-sgn .nav-link {
    background-color: #218838;
    font-weight: bold;
    color: #fff !important;
    padding: 10px;
    border-radius: 5px;
    margin: 0 5px;
  }
  </style>
  