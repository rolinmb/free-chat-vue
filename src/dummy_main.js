import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { firestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "_",
    authDomain: "_",
    projectId: "_",
    storageBucket: "_",
    messagingSenderId: "_",
    appId: "_"
  };  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore(app);

createApp(App).use(router).mount('#app');

export { app, auth, /* db */ };