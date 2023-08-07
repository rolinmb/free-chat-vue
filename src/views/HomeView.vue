<template>
  <div id="home-page" class="page-wrap">
    <form @submit.prevent="login">
      <h2>Login</h2>
      <input type="email" placeholder="Email address..." v-model="email" />
      <input type="password" placeholder="Password..." v-model="password" />
      <button type="submit" @click="loginWithUserAndPass">Login</button>
    </form>
    <HelloWorld msg="Hello world from a reactive vue component!"/>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../main.js'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
        email: '',
        password: ''
    }
  },
  methods: {
    loginWithUserAndPass() {
      signInWithEmailAndPassword(auth, this.email, this.password)
      .then(() => {
        this.$router.push('/dashboard');
      })
      .catch(error => {
        alert(error.message);
      });
    }
  }
}
</script>
