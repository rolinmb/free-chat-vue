import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDwa3jWVkEOL6PycAhB09OL5dWYk8Bg6r8",
    authDomain: "free-chat-vue.firebaseapp.com",
    projectId: "free-chat-vue",
    storageBucket: "free-chat-vue.appspot.com",
    messagingSenderId: "721840819775",
    appId: "1:721840819775:web:5879ab73e661911998328a"
  };  

initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app');