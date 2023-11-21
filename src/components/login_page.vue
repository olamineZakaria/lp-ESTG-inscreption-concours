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
          <div v-if="loading" class="loading-spinner"></div>
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
            <button class="login100-form-btn" type="submit" :disabled="loading">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import login from '../scripts/login'; // Update the path as needed

export default {
  mixins: [login],
};
</script>

<style scoped>
@import '@/assets/styles_login._fonts.css';
@import '@/assets/stayling.css';
.error-message {
  color: red;
  margin-top: 10px;
  margin-bottom: 10px;
}.loading-spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid #3498db;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
  margin: 20px auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
