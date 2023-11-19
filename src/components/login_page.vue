<!-- src/components/login_page.vue -->
<template>
  <div class="full-page">
    <div class="limiter">
      <div class="wrap-login100">
        <img class="logo-img" src="../assets/images/img2.png" alt="Your Image" width="350" height="250" style="padding-top: 0%;">
        <form class="login100-form validate-form" @submit.prevent="login">
          <span class="login100-form-title p-b-43">Accéder à votre compte</span>
          <pre><label class="label-style">Connectez-vous en utilisant votre Email et votre mot de passe<br>fourni lors de la création de votre compte<br><br><br></label></pre>
          <label>Email</label>
          <div class="wrap-input100">
            <input class="input100" type="email" v-model="email" name="email" >
          </div>
          <label>Mot de passe</label>
          <div class="wrap-input100" data-validate="Password is required">
            <input class="input100" type="password" v-model="password" name="password" >
          </div>
          <div v-if="error" class="error-message">
            {{ error }}
          </div>
          <div class="flex-sb-m w-full p-t-3 p-b-32">
            <div class="contact100-form-checkbox">
              <input class="input-checkbox100" id="ckb1" type="checkbox" v-model="rememberMe" name="remember-me">
              <label class="label-checkbox100" for="ckb1">
                Se rappeler de moi
              </label>
            </div>
            <div>
              <a href="/forgetpassword" class="txt1">
                Mot de passe oublié
              </a>
            </div>
          </div>
          <div class="container-login100-form-btn">
            <button class="login100-form-btn" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js';
import { getFirestore, collection, where, getDocs } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js';

export default {
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      error: '', // New variable for error message
    };
  },
  methods: {
    async login() {
      // Check if either Email or password is missing
      if (!this.email || !this.password) {
        this.error = 'Veuillez remplir tous les champs.';
        return;
      }

      try {
        const auth = getAuth();
        const db = getFirestore();

        // Check if user with the provided Email exists
        const usersCollection = collection(db, 'users');
        const query = where('email', '==', this.email);
        const userQuerySnapshot = await getDocs(usersCollection, query);
        if (userQuerySnapshot.size === 0) {
          return;
        }

        // Sign in with email and password
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;
        console.log('User logged in:', user);

        // Remember Me functionality
        if (this.rememberMe) {
          // Store user information in local storage
          localStorage.setItem('userData', JSON.stringify({ email: this.email }));
        }

        this.$router.push('/dashboard');
      } catch (error) {
        console.error('Login failed:', error.message);

        // Set error message to be displayed in the template based on the error type
        switch (error.code) {
          case 'auth/user-disabled':
            this.error = 'Le compte associé à cet email a été désactivé';
            break;
          case 'auth/too-many-requests':
            this.error = 'Trop de tentatives de connexion infructueuses. Veuillez réessayer plus tard';
            break;
          default:
            this.error = 'Email ou le mot de passe Invalide';
            break;
        }
      }
    },
  },
};
</script>

<style scoped>
@import '@/assets/styles_login._fonts.css';
@import '@/assets/stayling.css';
.error-message {
  color: red;
  margin-top: 10px;
}
</style>
