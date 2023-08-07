<template>
  <div id="home-page" class="page-wrap">
    <form @submit.prevent="login">
      <h2>Login</h2>
      <input type="email" placeholder="Email address..." v-model="email" />
      <input type="password" placeholder="Password..." v-model="password" />
      <button type="submit">Login</button>
    </form>
    <HelloWorld msg="Hello world from a reactive vue component!"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
