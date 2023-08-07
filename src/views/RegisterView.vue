<template>
  <div id="register-page" class="page-wrap">
    <form>
      <h2>Register for free-chat-vue here!</h2>
      <input type="email" placeholder="Email address..." v-model="email" />
      <input type="password" placeholder="Password..." v-model="password" />
      <button type="submit" @click="register">Register</button>
    </form>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../main.js'

export default {
  name: 'RegisterView',
  data() {
    return {
        email: '',
        password: ''
    }
  },
  methods: {
    register() {
        createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
            alert('Successfully registered! Please login to use the app.')
            this.$router.push('/');
        })
        .catch(error => {
            alert(error.message);
        });
    }
  }
}
</script>