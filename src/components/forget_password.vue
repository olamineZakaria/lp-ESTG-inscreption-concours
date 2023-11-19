<template>
  <div class="full-page">
    <div class="limiter">
      <div>
        <div class="wrap-login100">
          <img class="logo-img" src="../assets/images/img2.png" alt="Votre image" width="350" height="250" style="padding-top: 0%;">
          <form class="login100-form validate-form" @submit.prevent="resetPassword">
            <span class="login100-form-title p-b-43">Réinitialiser le mot de passe</span>
            <pre><label class="label-style"><u>* le mot de passe sera réinitialisé et envoyé à votre <br> e-mail que vous avez fourni lors de la création du compte.</u><br><br><br></label></pre>

            <label>CIN</label>
            <div class="wrap-input100" data-validate="Numéro CIN requis">
              <input v-model="cin" class="input100" type="text" name="cin">
            </div>
            <label>Email</label>
            <div class="wrap-input100" data-validate="Email valide requis: ex@abc.xyz">
              <input v-model="email" class="input100" type="email" name="email">
            </div>
            <div v-if="error" class="error-message">
              {{ error }}
            </div>
            <div class="container-login100-form-btn">
              <button class="login100-form-btn">Réinitialiser</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js';
import { getFirestore, collection, query, where, getDocs } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js';

export default {
  data() {
    return {
      cin: '',
      email: '',
      error: '',
    };
  },
  methods: {
    async resetPassword() {
      try {
        const auth = getAuth();
        const db = getFirestore();

        if (!this.email || !this.cin) {
          this.error = 'Veuillez remplir tous les champs.';
          return;
        }

        const usersRef = collection(db, 'users');
        const usersQuery = query(usersRef, where('cin', '==', this.cin));
        const usersSnapshot = await getDocs(usersQuery);

        if (usersSnapshot.empty) {
          this.error = 'La CIN fournie n’a pas été trouvée.';
          return;
        }

        const userDoc = usersSnapshot.docs[0].data();
        if (userDoc.email !== this.email) {
          this.error = 'L\'adresse email ne correspond pas à la CIN fournie.';
          return;
        }

        // Send password reset email
        await sendPasswordResetEmail(auth, this.email);
        this.error = 'Email de réinitialisation de mot de passe envoyé. Vérifiez votre boîte de réception.';
      } catch (error) {
        console.error('Password reset failed:', error.message);
        this.error = 'Échec de la réinitialisation du mot de passe ';
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
  margin-bottom: 10px;
}
</style>
