<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/dashboard">Dashboard</router-link> |
    <button @click="logout">Logout</button>
  </nav>
  <router-view/>
</template>

<script setup>
import auth from '@/main.js';

const logout = () => {
  try {
    auth.signOut()
    .then(() => {
      alert('Successfully logged out');
      this.$router.push('/');
    })
    .catch(error => {
      alert(error.message);
      this.$router.push('/');
    });
  } catch (error) {
    alert('No user is logged in (a.k.a. no user to sign out)');
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

input {
  margin-right: 28px;
}
</style>