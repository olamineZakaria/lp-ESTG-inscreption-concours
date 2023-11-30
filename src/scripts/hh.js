// yourFileName.js

import firebaseApp from '../scripts/firebaseConfig';
import {
  getAuth,
  updatePassword,
  updateEmail,
  sendPasswordResetEmail,
  currentUser,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import {
  getFirestore,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import {
  getStorage,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js";

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export default {
  data() {
    return {
      currentSection: 'parametres',
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      email: '', // Added email property
      passwordChangeSuccess: false,
      passwordChangeError: null,
      emailChangeSuccess: false,
      emailChangeError: null,
    };
  },
  methods: {
    async changePassword() {
      try {
        const user = currentUser(auth);
        const credentials = EmailAuthProvider.credential(
          this.email, // Use the provided email property
          this.currentPassword
        );
        await reauthenticateWithCredential(user, credentials);
        await updatePassword(user, this.newPassword);
        this.resetPasswordFields();
        this.passwordChangeSuccess = true;
        this.passwordChangeError = null;
        setTimeout(() => {
          this.passwordChangeSuccess = false;
        }, 5000);
      } catch (error) {
        console.error('Error changing password:', error.message);
        this.passwordChangeSuccess = false;
        this.passwordChangeError = error.message;
      }
    },
    async changeEmail() {
      try {
        const user = currentUser(auth);
        await updateEmail(user, this.newEmail);
        this.resetEmailFields();
        this.emailChangeSuccess = true;
        this.emailChangeError = null;
        setTimeout(() => {
          this.emailChangeSuccess = false;
        }, 5000);
      } catch (error) {
        console.error('Error changing email:', error.message);
        this.emailChangeSuccess = false;
        this.emailChangeError = error.message;
      }
    },
    resetPasswordFields() {
      this.currentPassword = '';
      this.newPassword = '';
      this.confirmPassword = '';
    },
    resetEmailFields() {
      this.newEmail = '';
    },
  },
};
