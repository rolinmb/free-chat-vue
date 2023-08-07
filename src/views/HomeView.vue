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
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from '@/main';

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods: {
    loginWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider)
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
