import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "_",
    authDomain: "_",
    projectId: "_",
    storageBucket: "_",
    messagingSenderId: "_",
    appId: "_"
  };  

const fbaseApp = initializeApp(firebaseConfig);
const fbaseAuth = getAuth(app);

createApp(App).use(router).mount('#app');

export default { firebaseConfig, auth };