<!-- dashboard.vue -->
<template>
  <div id="app">
    <section>
      <div class="left-div">
        <img alt="sas" src="../../public/favicon.ico" class="support">
        <br>
        <br>
        <ul class="nav">
          <li :class="{ 'active': currentSection === 'home' }">
            <a class="a-ptr" @click="showSection('home')">
              <i class="fa fa-cogs"></i>Tableau de Bard
            </a>
          </li>
          <li :class="{ 'active': currentSection === 'infos' }">
            <a class="a-ptr" @click="showSection('infos')">
              <i class="fa fa-user"></i>Mes informations
            </a>
          </li>
          <li :class="{ 'active': currentSection === 'cursus' }">
            <a class="a-ptr" @click="showSection('cursus')">
              <i class="fa fa-graduation-cap"></i>Mon Cursus
            </a>
          </li>
          <li :class="{ 'active': currentSection === 'dossier' }">
            <a class="a-ptr" @click="showSection('dossier')">
              <i class="fa fa-folder"></i>Mon dossier
            </a>
          </li>
          <li :class="{ 'active': currentSection === 'inscriptions' }">
            <a class="a-ptr" @click="showSection('inscriptions')">
              <i class="fa fa-user-plus"></i>Mes inscriptions
            </a>
          </li>
       
          <li :class="{ 'active': currentSection === 'parametres' }">
            <a class="a-ptr" @click="showSection('parametres')">
              <i class="fa fa-cogs"></i>Paramètres
            </a>
          </li>
          <li :class="{ 'active': currentSection === 'deconnexion' } " id="li_ptr">
            <a class="a-ptr" @click="deconnexionSection">
              <i class="fa fa-sign-out"></i>Se déconnecter
            </a>
          </li>
        </ul>
        <br><br>
      </div>
      <div class="right-div">
        <div id="main">
          <div class="head">
            <div class="col-div-6">
              <h4>Espace Candidat - {{ getSectionTitle() }}</h4>
            </div>
            <br>
          </div>
          <div class="clearfix">
            
          </div>
          <br />
          <div style="margin-top: 10px;" v-if="currentSection === 'home'">
            
          <div id="profile-upper">
            <div id="profile-banner-image">
              <img class="img-TM" src="../assets/images/Guelmim_02.jpg" alt="Banner image">
            </div>
            <div id="profile-d">
              <div id="profile-pic">
                <img class="img-TM" :src="profileImage || '../assets/images/photo.jpeg'" alt="">
              </div>
              <div id="u-name">{{ nom }} {{ prenom }}</div>
            </div>
          </div>
          <br><br>
          <hr color="#005596" size="5" noshade width="100%"> 
          <br>
        <!-- <div class="card-body"> -->
          <div class="user-form-wrapper">
              <div class="user-form">
                <h3>A propos de: {{ nom }} {{ prenom }}</h3>
                <p><i class="fa fa-id-card" aria-hidden="true"></i><strong> CIN:</strong> {{ cin }}</p>
                <p><i class="fa fa-envelope" aria-hidden="true"></i><strong> Email:</strong> {{ email }}</p>
                <p><i class="fa fa-phone" aria-hidden="true"></i><strong> Téléphone:</strong>{{ phone }}</p>
                <p><i class="fa fa-calendar" aria-hidden="true"></i><strong> Né le:</strong></p>
              </div>
              <div class="user-form-card">
                <div class="user-form-card-main" style="background-color: rgb(78, 186, 78);">
                  <h3 style="text-align: center;color: white;">Etat du dossier</h3>
                  <h2 style="text-align: center;color: white; margin-top: 10px;">Dossier complet</h2>
                  <br><br>
                </div>
                <br>
                <button class="button-65" role="button">Mon Dossier</button>
              </div>
          </div>
        <!-- </div> -->
        <br>
        <!-- <div class="card-body"> -->
          <div class="user-form-done">
              <div class="user-form">
                <h3>Mes Candidatures</h3>
              </div>
          </div>
        <!-- </div> -->
          </div>
          <div style="margin-top: 10px;" v-if="currentSection === 'infos'">
            <br><br>
            <form @submit.prevent="submitForm">
              <div class="form-group row">
                <div class="col">
                  <label for="profileImage">Image de profil:</label>
                  <input type="file" @change="handleImageUpload" accept="image/*"  class="green-border"/>
                  <img v-if="profileImage" :src="profileImage" alt="Profile Preview" class="profile-preview" />
                </div>
              </div>
              <div class="form-group row">
                <div class="col">
                  <label for="nom">Nom:</label>
                  <input type="text" v-model="nom" required class="green-border" placeholder="Nom"/>
                </div>
                <div class="col">
                  <label for="prenom">Prénom:</label>
                  <input type="text" v-model="prenom" required  class="green-border" placeholder="Prénom"/>
                </div>
              </div>

              <div class="form-group row">
                <div class="col">
                  <label for="email">Email:</label>
                  <input type="email" v-model="email" required style="background-color: rgb(235, 235, 235);" />
                </div>
                <div class="col">
                  <label for="CIN">CIN:</label>
                  <input type="text" v-model="cin" required style="background-color: rgb(235, 235, 235);" />
                </div>
              </div>

              <div class="form-group row">
                <div class="col">
                  <label for="pays">Pays:</label>
                  <select v-model="pays" name="pays" class="green-border"  >
                    <!-- ... (your existing country options) ... -->
                        <option value="MA">Maroc</option>
                        <option value="CA">Canada</option>
                        <option value="ML">Mali</option>
                        <option value="MT">Malte</option>
                        <option value="MP">Mariannes du nord, îles</option>
                        <option value="ZW">Zimbabwe​​​​​</option>
                  </select>
                </div>
                <div class="col">
                  <div class="col-12">
                    <div class="col-3" style="float:left">
                      <label for="number">Phone</label>
                      <select name="country" v-model="code" class="green-border" id="country">
                        <option data-countryCode="MA" value="212">Morocco (+212)</option>
                        <option data-countryCode="DZ" value="213">Algeria (+213)</option>
                        <option data-countryCode="AD" value="376">Andorra (+376)</option>
                      </select>
                    </div>
                    <div class="col-9" style="float:right">
                      <br>
                      <label for="number"></label>
                      <input type="text" v-model="phone" class="green-border" placeholder="0610080701"  />
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <div class="col">
                  <label for="salutation">Date de naissance:</label>
                  <input type="date" v-model="datenaissance" class="green-border">
                </div>
                <div class="col">
                  <label for="salutation">Adress:</label>
                  <input type="text" v-model="address" class="green-border" placeholder="Rue 14 PG 24,  N 121 Guelmim">
                </div>
              </div>
              <div class="form-group row">
                <div class="col">
                  <label for="salutation">Civilité:</label>
                  <select v-model="salutation"  class="green-border">
                    <option value="M.">M.</option>
                    <option value="Mlle">Mlle</option>
                    <option value="Mme">Mme</option>
                  </select>
                </div>
              </div>
              <br><br><br><br>
              <button class="button-65" submit role="button">Enregistrer</button>
            </form>
          </div>
          <div style="margin-top: 10px;" v-if="currentSection === 'cursus'">
            <br><br>
            <form >
              <div class="form-group row-50">
                <div class="col-50">
                  <label for="Niveau">Niveau d'étude Actuel</label>
                  <select name="Niveau" id="Niveau" class="green-border">
                  </select>
                </div>
                <div class="col-50">
                  <label for="CNE">Code Massar:</label>
                  <input type="text" v-model="CNE" required  class="green-border"/>
                </div>
                <div class="col-500">
                  <label for="Lycée">Lycée d'obtention du Bac</label>
                  <input type="text" v-model="Lycée" required  class="green-border"/>
                </div>
              </div>

              <div class="form-group row">
                <div class="col">
                  <label for="Année">Année d’obtention du Bac</label>
                  <select name="Année" id="Année" class="green-border">
                  </select>
                </div>
                <div class="col">
                  <label for="Lycée">Série du bac</label>
                  <input type="text" v-model="Lycée" required  class="green-border"/>
                </div>
              </div>
              <div class="form-group row">
                <div class="col">
                  <label for="Diplome">Diplome apres Bac</label>
                  <select name="Diplome" id="Diplome" class="green-border">
                  </select>
                </div>
                <div class="col-501">
                  <label for="Obtenue">Diplome Obtenue.</label>
                  <select name="Obtenue" id="Obtenue" class="green-border">
                  </select>
                </div>
                <div class="col-50">
                  <label for="d’obtention">Année d’obtention</label>
                  <select name="d’obtention" id="d’obtention" class="green-border">
                  </select>
                </div>
              </div>

              <div class="form-group row">
                <div class="col">
                  <label for="Option">Option Diplome</label>
                  <select name="Option" class="green-border" >
                    <!-- ... (your existing country options) ... -->
                  </select>
                </div>
                <div class="col">
                  <label for="Ville">Ville</label>
                  <select name="Ville" class="green-border" >
                    <!-- ... (your existing country options) ... -->
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <div class="col">
                  <label for="salutation">Choisir une université</label>
                  <select v-model="salutation" class="green-border">
                  </select>
                </div>
                <div class="col">
                  <label for="salutation">Établissement</label>
                  <select v-model="salutation" class="green-border">
                  </select>
                </div>
              </div>
              <button type ="submit" class="button-65" role="button">Enregistrer</button>
            </form>
          </div>
          <div v-if="currentSection === 'dossier'">
            <br><br><br>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import firebaseApp from '../scripts/firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js";
import { getDocs, query, where, updateDoc, doc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

// ... (your existing code)

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export default {
  data() {
    return {
      currentSection: 'home',
      databaseuser: {},
      nom: '',
      prenom: '',
      email: '',
      cin: '',
      pays: '',
      code: '',
      phone: '',
      profileImage: '',
      salutation: '',
      address: '',

    };
  },
  methods: {
    showSection(section) {
      this.currentSection = section;
    },
    deconnexionSection() {
      localStorage.removeItem('userData');
      this.$router.push('/welcome');
    },
    getSectionTitle() {
      switch (this.currentSection) {
        case 'home':
          return 'Profil';
        case 'infos':
          return 'Mes Informations';
        case 'cursus':
          return 'Mon Cursus Scolaire';
        case 'inscriptions':
          return 'Mes Inscriptions';
        case 'dossier':
          return 'Mon Dossier';
        case 'parametres':
          return 'Paramètres';
        default:
          return '';
      }
    },
    async submitForm() {
      try {
        const storageRef = ref(storage, 'profile_images/' + this.email + '_' + Date.now());
        await uploadBytes(storageRef, this.imageFile);
        const imageUrl = await getDownloadURL(storageRef);

        // Check if the user already exists based on their email
        const querySnapshot = await getDocs(query(collection(db, "users"), where("email", "==", this.email)));
        if (!querySnapshot.empty) {
          // Update the existing user document
          const userDoc = querySnapshot.docs[0];
          await updateDoc(doc(db, "users", userDoc.id), {
            nom: this.nom,
            prenom: this.prenom,
            cin: this.cin,
            pays: this.pays,
            code: this.code,
            phone: `+${this.code}${this.phone}`,
            profileImage: imageUrl,
            salutation: this.salutation,
            address: this.address,
            // Add other fields as needed
          });
          const databaseuser = {
            nom: this.nom,
            prenom: this.prenom,
            cin: this.cin,
            pays: this.pays,
            code: this.code,
            phone: `+${this.code}${this.phone}`,
            profileImage: imageUrl,
            salutation: this.salutation,
            address: this.address,

            // Add other fields as needed
          };
          localStorage.setItem('databaseuser', JSON.stringify(databaseuser));

          alert('User information updated successfully!');
        } else {
          // User does not exist, show an error message
          alert('User with email ' + this.email + ' not found. Cannot update information.');
        }

        // You can add further logic, such as showing a success message or redirecting the user
      } catch (e) {
        console.error("Error updating/adding document: ", e);
        alert('Error updating/adding user information: ' + e);
        // Handle errors as needed
      }
    },
    handleImageUpload(event) {
      // ... (your existing image upload logic)
    },
    created() {
        const storedUser = localStorage.getItem('databaseuser');
        if (storedUser) {
          this.databaseuser = JSON.parse(storedUser);
          // Assign other properties if needed
          this.nom = this.databaseuser.nom;
          this.prenom = this.databaseuser.prenom;
          this.email = this.databaseuser.email;
          this.cin = this.databaseuser.cin;
          this.pays = this.databaseuser.pays;
          this.code = this.databaseuser.code;
          this.phone = this.databaseuser.phone;
          this.profileImage = this.databaseuser.profileImage;
          this.salutation = this.databaseuser.salutation;
          this.address = this.databaseuser.address;
          // Add other properties as needed
        }
      },
  },
};
</script>

<style>
@import '../assets/trable.css';
.card-body {
            max-width: 100%;
            margin-top: 10px;
            padding: 20px;
            background-color: #fbfdff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .user-info-title {
            display: flex;
            align-items: center;
            margin-bottom: 5px;
        }

        .user-info-title svg {
            margin-right: 5px;
        }

        .card-text {
            margin-bottom: 10px;
        }

        .btn-primary {
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 10px;
            border-radius: 5px;
            text-decoration: none;
            display: inline-block;
            cursor: pointer;
        }

        .btn-primary:hover {
            background-color: #0056b3;
        }

</style>
