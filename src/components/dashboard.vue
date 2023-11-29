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
              <i class="fa fa-cogs"></i>Tableau de Board
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
                <img class="img-TM" :src="profileImage" alt="">
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
                <p><i class="fa fa-calendar" aria-hidden="true"></i><strong> Né le:</strong>{{ datenaissance }}</p>
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
                  <input type="file" @change="submitForm" accept="image/*"  class="green-border"/>
                  <img v-if="profileImage" :src="profileImage" alt="Profile Preview" class="profile-preview" height="100"/>
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
                  <input type="email" v-model="email" required style="background-color: rgb(235, 235, 235);"  />
                </div>
                <div class="col">
                  <label for="CIN">CIN:</label>
                  <input type="text" v-model="cin" required style="background-color: rgb(235, 235, 235);"  />
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
              <br>
              <button class="button-65" submit role="button">Enregistrer</button>
            </form>
          </div>
          <div style="margin-top: 10px;" v-if="currentSection === 'cursus'">
            <br><br>
            <form @submit.prevent="submitFormcursus" >
              <div class="form-group row-50">
                <div class="col-50">
                  <label for="Niveau">Niveau d'étude Actuel</label>
                  <select name="Niveau" v-model="Niveau" id="Niveau" class="green-border">
                    <option value="BAC+2">BAC+2</option>
                  </select>
                </div>
                <div class="col-50">
                  <label for="CNE">Code Massar:</label>
                  <input type="text" v-model="CNE" required  class="green-border" placeholder="ex : D15258985"/>
                </div>
                <div class="col-500">
                  <label for="Lycée">Lycée d'obtention du Bac</label>
                  <input type="text" v-model="Lycee" required  class="green-border" placeholder="ex : Lycee Mohammed EL baqali "/>
                </div>
              </div>

              <div class="form-group row">
                <div class="col">
                  <label for="Année">Année d’obtention du Bac</label>
                  <select name="Année" id="Année" class="green-border">
                    <option value="2024">2023</option>
                    <option value="2023">2022</option>
                    <option value="2022">2021</option>
                    <option value="2021">2020</option>
                  </select>
                </div>
                <div class="col">
                  <label for="Lycée">Série du bac</label>
                  <input type="text" v-model="bac" required  class="green-border" placeholder="ex : science math B"/>
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
                    <option value="2024">2023</option>
                    <option value="2023">2022</option>
                    <option value="2022">2021</option>
                    <option value="2021">2020</option>

                  </select>
                </div>
              </div>

              <div class="form-group row">
                <div class="col">
                  <label for="Option">Option Diplome</label>
                  <select name="Option" class="green-border" >
                    <option value="">informatique</option>
                    <option value="">genie infomatique</option>
                    <option value="">genie electrique</option>
                    <option value="">data science</option>
                    <option value="">informatique descionelle</option>
                  </select>
                </div>
                <div class="col">
                  <label for="Ville">Ville</label>
                  <select name="Ville" class="green-border" >
                    <option value="Agadir">Agadir</option>
                    <option value="Al Hoceima">Al Hoceima</option>
                    <option value="Beni Mellal">Beni Mellal</option>
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
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getFirestore, collection, getDocs, query, where, updateDoc, doc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js";

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export default {
  data() {
    return {
      currentSection: 'home',
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
      datenaissance: ''
    };
  },
  methods: {
    showSection(section) {
      this.currentSection = section;
    },
    deconnexionSection() {
      localStorage.clear();
      this.$router.push('/login');
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
        const file = event.target.files[0];
        const storageRef = ref(storage, 'profile_images/' + this.email + '_' + Date.now() + '.png');

        // Check if the file is an image
        if (file.type.startsWith('image/')) {
          await uploadBytes(storageRef, file);
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
              datenaissance: this.datenaissance,
            });
            const userData = {
              nom: this.nom,
              prenom: this.prenom,
              email: this.email,
              cin: this.cin,
              pays: this.pays,
              code: this.code,
              phone: this.phone,
              profileImage: imageUrl,
              salutation: this.salutation,
              address: this.address,
              datenaissance: this.datenaissance,
            };
            // Store the updated user data in localStorage
            localStorage.setItem('databaseuser', JSON.stringify(userData));

            alert('User information updated successfully!');
          } else {
            // User does not exist, show an error message
            alert('User with email ' + this.email + ' not found. Cannot update information.');
          }
        } else {
          alert('Invalid file format. Please select a valid image file.');
        }
      } catch (e) {
        console.error("Error updating/adding document: ", e);
        alert('Error updating/adding user information: ' + e);
        // Handle errors as needed
      }
    },
    handleImageUpload(event) {
      // ... (your existing image upload logic)
    },
    async fetchUserData(userEmail) {
      try {
        const userQuery = query(collection(db, "users"), where("email", "==", userEmail));
        const querySnapshot = await getDocs(userQuery);

        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          this.nom = userData.nom;
          this.prenom = userData.prenom;
          this.email = userData.email;
          this.cin = userData.cin;
          this.pays = userData.pays;
          this.code = userData.code;
          this.phone = userData.phone;
          this.profileImage = userData.profileImage;
          this.salutation = userData.salutation;
          this.address = userData.address;
          this.datenaissance = userData.datenaissance;

          const fetchedUserData = {
            nom: this.nom,
            prenom: this.prenom,
            email: this.email,
            cin: this.cin,
            pays: this.pays,
            code: this.code,
            phone: this.phone,
            profileImage: this.profileImage,
            salutation: this.salutation,
            address: this.address,
            datenaissance: this.datenaissance,
          };
          localStorage.setItem('databaseuser', JSON.stringify(fetchedUserData));
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    },
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.fetchUserData(user.email);
      }
    });

    const storedUser = localStorage.getItem('databaseuser');
    if (storedUser) {
      const databaseuser = JSON.parse(storedUser);
      this.email = databaseuser.email;
      this.cin = databaseuser.cin;
    }
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