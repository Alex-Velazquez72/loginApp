import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWzGzAma38MR8WymYlItx4EtLdAw7gv6c",
    authDomain: "login-628e2.firebaseapp.com",
    projectId: "login-628e2",
    storageBucket: "login-628e2.firebasestorage.app",
    messagingSenderId: "482730017172",
    appId: "1:482730017172:web:6f750df0c644f253898f81"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount("#app")
