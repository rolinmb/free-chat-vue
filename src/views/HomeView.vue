<template>
  <div id="home-page" class="page-wrap">
    <form @submit.prevent="login">
      <h2>Login</h2>
      <button type="submit" @click="loginWithGoogle">Login</button>
    </form>
    <HelloWorld msg="Hello world from a reactive vue component!"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import auth from '@/main.js';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods: {
    loginWithGoogle() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
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
