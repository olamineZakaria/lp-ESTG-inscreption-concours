<!-- src/components/registration_page.vue -->
<template>
    <div class="full-page">
      <div class="limiter">
        <div>
          <div class="wrap-login100">
            <img class="logo-img" src="../assets/images/img2.png" alt="Votre image" width="350" height="250" style="padding-top: 0%;">
            <form class="login100-form validate-form" @submit.prevent="registerUser">
              <span class="login100-form-title p-b-43">Première visite</span>
              <pre><label class="label-style">Créer un nouveau compte<br><u>CIN: Numéro de la carte d'identité nationale</u><br><br><br></label></pre>
              <label>CIN</label>
              <div class="wrap-input100" data-validate="Numéro CIN requis">
                <input class="input100" type="text" name="cin" ref="cin">
              </div>
              <label>Email</label>
              <div class="wrap-input100" data-validate="Email valide requis: ex@abc.xyz">
                <input class="input100" type="email" name="email" ref="email">
              </div>
              <label>Mot de passe</label>
              <div class="wrap-input100" data-validate="Mot de passe requis">
                <input class="input100" type="password" name="password" ref="password">
              </div>
              <label>Confirmez le mot de passe</label>
              <div class="wrap-input100" data-validate="Confirmez le mot de passe">
                <input class="input100" type="password" name="confirm-password" ref="confirmPassword">
              </div>
              <div v-if="error" class="error-message">
              {{ error }}
              </div>
              <div v-if="loading" class="loading-spinner"></div>
              <div v-if="success" class="success-message">
              Compte créé avec succès. Redirection vers la page de connexion...
              </div>
              <div class="container-login100-form-btn">
                <button class="login100-form-btn" type="submit">Créer un compte</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import firebaseApp from '../scripts/firebaseConfig'; // Update the path as needed

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const auth = getAuth(firebaseApp);

// ...

const db = getFirestore(firebaseApp);

export default {
  data() {
    return {
      error: '',
      success: false,
      loading: false,
    };
  },
  methods: {
    async registerUser() {
  const cin = this.$refs.cin.value;
  const email = this.$refs.email.value;
  const password = this.$refs.password.value;
  const confirmPassword = this.$refs.confirmPassword.value;

  if (!cin || !email || !password || !confirmPassword) {
    this.error = 'Veuillez remplir tous les champs.';
    return;
  }
  if (password !== confirmPassword) {
    this.error = "Les mots de passe ne correspondent pas.";
    return;
  }

  try {
    this.loading = true;

    // Check if the user with the given CIN and email already exists
    const usersCollectionRef = collection(db, "users");
    const q = query(usersCollectionRef, where("cin", "==", cin));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // A user with the same CIN and email already exists
      this.error = 'Un utilisateur avec le même CIN existe déjà.';
      this.loading = false;
      return this.error;
    }

    // If the user does not exist, proceed with user registration
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store user data in Firestore
    await addDoc(usersCollectionRef, {
      cin: cin,
      email: email,
      // Avoid storing passwords directly in Firestore for security reasons.
      // Instead, consider using a separate server-side function to handle sensitive data.
    });

    console.log('User registered:', user);
    this.loading = false;
    this.error = false;
    this.success = true;
    setTimeout(() => {
      this.$router.push('/login');
    }, 3000);
  } catch (error) {
    this.error = true;
    console.error('Registration failed:', error.message);
    this.loading = false;
  }
}
  },
  // Optionally, you can initialize Firebase inside a lifecycle hook
  created() {
    // Firebase initialization can go here if needed
  }
};

  </script>
  
<style scoped>
@import '@/assets/styles_login._fonts.css';
@import '@/assets/stayling.css';
@import '@/assets/style.css';

.full-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #f0f0f0; /* Set the background color you prefer */
  overflow: auto;
}
.error-message {
  color: red;
  margin-top: 10px;
}
.success-message {
  color: green;
  margin-top: 10px;
}

.loading-spinner {
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