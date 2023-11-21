// login.js
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js';
import { getFirestore, collection, where, getDocs } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js';

export default {
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      error: '',
      loading: false,
    };
  },
  methods: {
    async login() {
      if (!this.email || !this.password) {
        this.error = 'Veuillez remplir tous les champs.';
        return;
      }

      try {
        const auth = getAuth();
        const db = getFirestore();

        this.loading = true;

        const usersCollection = collection(db, 'users');
        const query = where('email', '==', this.email);
        const userQuerySnapshot = await getDocs(usersCollection, query);

        if (userQuerySnapshot.size === 0) {
          this.error = 'Email ou le mot de passe Invalide';
          return;
        }

        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;

        // Retrieve additional user data (e.g., cin) from Firestore using the logged-in user's email
        const cinQuery = where('email', '==', user.email);
        const cinQuerySnapshot = await getDocs(usersCollection, cinQuery);

        if (cinQuerySnapshot.size > 0) {
          const cin = cinQuerySnapshot.docs[0].data().cin;

          
          // Display cin in an alert or use it as needed
          // alert('CIN: ' + cin);
        }

        console.log('User logged in:', user);
        this.$router.push('/dashboard');
      } catch (error) {
        console.error('Login failed:', error.message);

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
      } finally {
        this.loading = false;
      }
    },
  },
};
