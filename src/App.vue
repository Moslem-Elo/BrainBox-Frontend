

<template>
  <div>
    <header>
      <div class="wrapper">
        <div></div>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/about">All Quizzes</router-link>
          <router-link to="/question">Questions</router-link>
        </nav>
      </div>
    </header>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>
header {
  background-color: #413e3e;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}

body{
  background-color: #5e5e5e;
  align-content: center;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  gap: 20px;
}

.content {
  margin-top: 60px; /* Höhe der fixierten Navigationsleiste */
}

.router-link-exact-active {
  font-weight: bold;
}
</style>
