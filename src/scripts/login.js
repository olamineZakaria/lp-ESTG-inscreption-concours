// Import des modules Firebase nécessaires
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js';
import { getFirestore, collection, where, getDocs } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js';

export default {
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      error: '',
      loading: false,
      databaseuser: {}, // Stocke les données supplémentaires de l'utilisateur
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

        // Réalise une requête pour récupérer l'utilisateur depuis la collection 'users'
        const usersCollection = collection(db, 'users');
        const query = where('email', '==', this.email);
        const userQuerySnapshot = await getDocs(usersCollection, query);

        if (userQuerySnapshot.size === 0) {
          this.error = 'Email ou le mot de passe Invalide';
          return;
        }

        // Connexion avec l'e-mail et le mot de passe fournis
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;

        // Requête pour récupérer des données supplémentaires basées sur l'e-mail de l'utilisateur
        const cinQuery = where('email', '==', user.email);
        const cinQuerySnapshot = await getDocs(usersCollection, cinQuery);

        if (cinQuerySnapshot.size > 0) {
          const userData = cinQuerySnapshot.docs[0].data();

          // Vérifie si la propriété 'cin' existe dans les données de l'utilisateur
          if ('cin' in userData) {
            const cin = userData.cin;
            const databaseuser = {
              cin: cin,
              email: user.email,
            };

            // Stocke les données dans le stockage local
            localStorage.setItem('databaseuser', JSON.stringify(databaseuser));

            // Affiche une alerte avec le CIN et l'e-mail
            alert(`Login successful!\nCIN: ${cin}\nEmail: ${user.email}`);
          } else {
            // Gère le cas où 'cin' n'est pas présent dans les données de l'utilisateur
            console.error('CIN not found in user data');
            // Vous pouvez afficher un message d'erreur ou gérer ce cas en conséquence
          }
        }

        console.log('User logged in:', user);
        this.$router.push('/dashboard');
      } catch (error) {
        // Gère les erreurs de connexion
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
    created() {
      // Charge les données utilisateur depuis le stockage local lors de la création du composant
      const storedUser = localStorage.getItem('databaseuser');
      if (storedUser) {
        this.databaseuser = JSON.parse(storedUser);
      }
    }
  },
};
