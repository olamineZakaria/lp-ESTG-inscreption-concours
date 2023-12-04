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
          <li :class="{ 'active': currentSection === 'deconnexion' }" id="li_ptr">
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
                <div :style="{ backgroundColor: backgroundColor }" class="user-form-card-main">
                  <h3 style="text-align: center; color: white;">Etat du dossier</h3>
                  <h2 style="text-align: center; color: white; margin-top: 10px;">
                    {{ hasFileUrls ? 'Dossier complet' : 'Dossier incomplet' }}
                  </h2>
                  <br /><br />
                </div>
                <br />
                <button class="button-65" role="button">Mon Dossier</button>
               </div>
            </div>
            <!-- </div> -->
            <br>
            <!-- <div class="card-body"> -->
              <div class="user-form-done">
                <h2>Mes Candidateur</h2>
                <div v-for="(inscription, index) in inscriptions" :key="index" class="user-form"  style="display: flex; align-items: center; margin-top: 10px;">
                  <img src="../assets/images/894848.png" height="60" alt="">
                  <h3>{{ inscription.programme }}</h3>
                  <p aria-hidden="true" style="margin-left: auto; font-size: 1em;" color="{'admis-color': inscription.etat === 'admis','candidat-color': inscription.etat === 'candidat', 'rejected-color': inscription.etat !== 'admis' }">
                    {{ inscription.status }} <i :class="{ 'fa fa-check': inscription.status === 'admis','fa fa-clock-o':inscription.status === 'Candidat' ,'fa fa-times': inscription.status !== 'admis', 'admis-color': inscription.status === 'admis', 'candidat-color': inscription.status === 'Candidat','rejected-color': inscription.status === 'non admis' }" style="font-size: 2em;"></i>
                  </p>
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
                  <input type="file" @change="submitForm" accept="image/*" class="green-border" />
                  <img v-if="profileImage" :src="profileImage" alt="Profile Preview" class="profile-preview"
                    height="100" />
                </div>
              </div>
              <div class="form-group row">
                <div class="col">
                  <label for="nom">Nom:</label>
                  <input type="text" v-model="nom" required class="green-border" placeholder="Nom" />
                </div>
                <div class="col">
                  <label for="prenom">Prénom:</label>
                  <input type="text" v-model="prenom" required class="green-border" placeholder="Prénom" />
                </div>
              </div>

              <div class="form-group row">
                <div class="col">
                  <label for="email">Email:</label>
                  <input type="email" v-model="email" required style="background-color: rgb(235, 235, 235);" readonly />
                </div>
                <div class="col">
                  <label for="CIN">CIN:</label>
                  <input type="text" v-model="cin" required style="background-color: rgb(235, 235, 235);" readonly />
                </div>
              </div>

              <div class="form-group row">
                <div class="col">
                  <label for="pays">Pays:</label>
                  <select v-model="pays" name="pays" class="green-border">
                    <!-- ... (your existing country options) ... -->
                    <option value="MA">Maroc</option>
                    <option value="CA">Canada</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malte</option>
                    <option value="MP">Mariannes du nord, îles</option>
                    <option value="ZW">Zimbabwe</option>
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
                      <input type="text" v-model="phone" class="green-border" placeholder="0610080701" />
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
                  <select v-model="salutation" class="green-border">
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
            <form @submit.prevent="submitFormcursus">
              <div class="form-group row-50">
                <div class="col-50">
                  <label for="Niveau">Niveau d'étude Actuel</label>
                  <select name="Niveau" v-model="niveau" id="Niveau" class="green-border">
                    <option value="BAC+2">BAC+2</option>
                  </select>
                </div>
                <div class="col-50">
                  <label for="CNE">Code Massar:</label>
                  <input type="text" v-model="CNE" required class="green-border" placeholder="ex : D15258985" />
                </div>
                <div class="col-500">
                  <label for="Lycée">Lycée d'obtention du Bac</label>
                  <input type="text" v-model="Lycee" required class="green-border"
                    placeholder="ex : Lycee Mohammed EL baqali " />
                </div>
              </div>

              <div class="form-group row">
                <div class="col">
                  <label for="Année">Année d’obtention du Bac</label>
                  <select name="Année" v-model="anneebac" id="Année" class="green-border">
                    <option value="2024">2023</option>
                    <option value="2023">2022</option>
                    <option value="2022">2021</option>
                    <option value="2021">2020</option>
                  </select>
                </div>
                <div class="col">
                  <label for="Lycée">Série du bac</label>
                  <input type="text" v-model="bac" required class="green-border" placeholder="ex : science math B" />
                </div>
              </div>
              <div class="form-group row">
                <div class="col">
                  <label for="Diplome">Diplome apres Bac</label>
                  <select name="Diplome" v-model="diplome" id="Diplome" class="green-border">
                    <option value="DUT">DUT</option>
                    <option value="BTS">BTS</option>
                  </select>
                </div>
                <div class="col">
                  <label for="d’obtention">Année d’obtention</label>
                  <select name="d’obtention" v-model="anneedip" id="d’obtention" class="green-border">
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
                  <select name="Option" v-model="optionD" class="green-border">
                    <option value="">informatique</option>
                    <option value="">genie infomatique</option>
                    <option value="">genie electrique</option>
                    <option value="">data science</option>
                    <option value="">informatique descionelle</option>
                  </select>
                </div>
                <div class="col">
                  <label for="Ville">Ville</label>
                  <select name="Ville" v-model="ville" class="green-border">
                    <option value="Agadir">Agadir</option>
                    <option value="Al Hoceima">Al Hoceima</option>
                    <option value="Beni Mellal">Beni Mellal</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <div class="col">
                  <label for="salutation">Établissement</label>
                  <select v-model="ecole" class="green-border">
                    <option value="EST_Safi">EST Safi</option>
                    <option value="EST_Essaouira">EST Essaouira</option>
                    <option value="EST_Casablanca">EST Casablanca</option>
                    <option value="EST_Sale">EST Salé</option>
                    <option value="EST_Hoceima">EST Hoceima</option>
                    <option value="EST_Fkih_Ben_Salah">EST Fkih Ben Salah</option>
                    <option value="EST_Sidi_Bennour">EST Sidi Bennour</option>
                    <option value="EST_Meknes">EST Meknes</option>
                    <option value="EST_Kenitra">EST Kénitra</option>
                    <option value="EST_Fes">EST Fes</option>
                    <option value="EST_Oujda">EST Oujda</option>
                    <option value="EST_Beni_Mellal">EST Beni Mellal</option>
                    <option value="EST_Agadir">EST Agadir</option>
                    <option value="EST_Berrchid">EST Berrchid</option>
                    <option value="EST_Khenifra">EST Khenifra</option>
                    <option value="EST_Laayoune">EST Laayoune</option>
                    <option value="EST_Guelmim">EST Guelmim</option>
                    <option value="EST_Nador">EST Nador</option>
                  </select>
                </div>
              </div>
              <button type="submit" class="button-65" role="button">Enregistrer</button>
            </form>
          </div>
          <div v-if="currentSection === 'dossier'" class="file-upload-section">
                <div :style="{ backgroundColor: backgroundColor }" class="user-form-card-main-dd">
                  <h2 style="text-align: center; color: white; margin-top: 0px;">
                    {{ hasFileUrls ? 'Dossier complet' : 'Dossier incomplet' }}
                  </h2>
                </div>
            <form @submit.prevent="submitAllFiles" class="file-upload-form">
                <div class="form-group" v-for="(file, index) in files" :key="index">
                  <label :class="{ 'already-exist-label': alreadyExist }" :for="'file' + (index + 1)">File {{ index + 1 }} - {{ fileLabels[index] }}</label>
                  <input :type="'file'" :id="'file' + (index + 1)" @change="handleFileChange(index)" />
                </div>
                <div v-if="loading" class="loading-spinner"></div>
                <button type="submit" class="upload-button" role="button">Upload All</button>
            </form>
          </div>
    <div v-if="currentSection === 'parametres'">
    <!-- Change Password Form -->
    <form @submit.prevent="changePassword">
      <h4>Changer le mot de passe</h4>
      <div class="form-group">
        <label for="currentPassword">Mot de passe actuel:</label>
        <input type="password" v-model="currentPassword" required />
      </div>
      <div class="form-group">
        <label for="newPassword">Nouveau mot de passe:</label>
        <input type="password" v-model="newPassword" required />
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirmer le nouveau mot de passe:</label>
        <input type="password" v-model="confirmPassword" required />
      </div>
      <button type="submit" class="button-65" role="button">Changer le mot de passe</button>
      <div v-if="passwordChangeSuccess" class="alert alert-success" role="alert">
        Mot de passe changé avec succès!
      </div>
      <div v-if="passwordChangeError" class="alert alert-danger" role="alert">
        {{ passwordChangeError }}
      </div>
    </form>

    <!-- Change Email Form -->
    <form @submit.prevent="changeEmail">
      <h4>Changer l'adresse e-mail</h4>
      <div class="form-group">
        <label for="newEmail">Nouvelle adresse e-mail:</label>
        <input type="email" v-model="newEmail" required />
      </div>
      <button type="submit" class="button-65" role="button">Changer l'adresse e-mail</button>
      <div v-if="emailChangeSuccess" class="alert alert-success" role="alert">
        Adresse e-mail changée avec succès!
      </div>
      <div v-if="emailChangeError" class="alert alert-danger" role="alert">
        {{ emailChangeError }}
      </div>
    </form>
  </div>
    <div style="margin-top: 10px;" v-if="currentSection === 'inscriptions'">
      <div class="user-form-done">
      <div v-for="(formation, index) in formation" :key="index" class="user-form" style="display: flex; align-items: center; margin-top: 10px;">
        <img src="../assets/images/894848.png" height="60" alt="">
        <h3>{{ formation.programme }} </h3>
        <p style="margin-left:10px ;"> Date fin : {{ formation.datefin }}</p>
        <button class="btn-primary inscription-button" style="margin-left:auto ;" @click="AddInscreption(index)">Inscription
        </button>
      </div>
      </div>
       <br>
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
import { getDatabase, onValue } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js';
import { PDFDocument, rgb } from 'pdf-lib';

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
      datenaissance: '',
      // 
      niveau: '',
      CNE: '',
      Lycee: '',
      anneebac: '',
      bac: '',
      diplome: '',
      anneedip: '',
      optionD: '',
      ville: '',
      ecole: '',
      //
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      newEmail: '',
      passwordChangeSuccess: false,
      passwordChangeError: null,
      emailChangeSuccess: false,
      emailChangeError: null,
      inscriptions: [],
      formation:[],
      loading: false,
      showUploadButton:false,
      //
      files: Array(5).fill(null),
      hasFileUrls: false,
      fileLabels: ['Bac (*png)', 'CIN Recto/verso (*png)', 'Diplôme(*png)', 'Relevé de notes Bac(*png)', 'Relevé de notes Diplôme(*png)'], // Replace with your list of names
      backgroundColor: 'orange',
      alreadyExist: false,
      etat:''

    };
  },
  
  methods: {
    async fetchInscriptions() {
      try {
        const userQuerySnapshot = await getDocs(query(collection(db, "users"), where("email", "==", this.email)));

        if (!userQuerySnapshot.empty) {
          const userDoc = userQuerySnapshot.docs[0];
          const inscreptionLiST = userDoc.data().InscreptionLiST || [];

          // Map inscreptionLiST to inscriptions array
          this.inscriptions = inscreptionLiST.map(inscription => ({
            programme: inscription.programme,
            status: inscription.status,
          }));
        } else {
          console.error('User not found.');
        }
      } catch (e) {
        console.error('Error fetching data: ', e);
        // Handle errors as needed
      }
    },
    async AddInscreption(index) {
  try {
    // Assuming this.email contains the email of the user
    const userQuerySnapshot = await getDocs(query(collection(db, "users"), where("email", "==", this.email)));

    if (!userQuerySnapshot.empty) {
      // User already exists, update the user document
      const userDoc = userQuerySnapshot.docs[0];

      // Ensure this.formation[index] is defined
      if (this.formation[index].programme) {
        // Check if InscreptionLiST is an array in the existing user document
        const existingInscreptionLiST = userDoc.data().InscreptionLiST || [];

        // Check if the inscription already exists
        const inscriptionExists = existingInscreptionLiST.some(inscription => inscription.programme === this.formation[index].programme);

        if (inscriptionExists) {
          alert('Inscription for this formation already exists!');
          return;  // Exit the function early
        }

        const inscriptionData = {
          InscreptionLiST: [
            ...existingInscreptionLiST,
            {
              programme: this.formation[index].programme,
              status: 'Candidat', // Add the status field with an initial value
            },
          ],
        };

        await updateDoc(doc(db, "users", userDoc.id), inscriptionData);
      } else {
        console.error('Error adding inscription: Formations data is undefined.');
        alert('Error adding inscription: Formations data is undefined.');
        return;  // Exit the function early to prevent further errors
      }
    } else {
      // User does not exist, add a new user document
      // const userData = {
      //   InscreptionLiST: [
      //     {
      //       programme: this.formation[index].programme,
      //       status: 'Candidat', // Add the status field with an initial value
      //     },
      //   ],
      // };

      alert('Error adding inscription: ');


      // await addDoc(collection(db, "users"), userData);
    }
    const userInformation = {
      nom: this.nom,
      CNE: this.CNE,
      prenom: this.prenom,
      cin:this.cin,
      inscriptions:this.formation[index].programme
      // Add other user information fields here
    };

    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();

    // Add a new page to the PDF
    const page = pdfDoc.addPage();

    // Add text to the page
    page.drawText(`Nom: ${userInformation.nom}`, { x: 15, y: page.getHeight() - 150, fontColor: rgb(0, 0, 0) });
    page.drawText(`Prenom: ${userInformation.prenom}`, { x: 15, y: page.getHeight() - 200, fontColor: rgb(0, 0, 0) });
    page.drawText(`CIN: ${userInformation.cin}`, { x: 15, y: page.getHeight() - 250, fontColor: rgb(0, 0, 0) });
    page.drawText(`CNE: ${userInformation.CNE}`, { x: 15, y: page.getHeight() - 300, fontColor: rgb(0, 0, 0) });

    // Add other user information fields as needed

    // Save the PDF as a Uint8Array
    const pdfBytes = await pdfDoc.save();

    // Convert the Uint8Array to a Blob
    const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

    // Create a download link and trigger the download
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(pdfBlob);
    link.download = 'inscription_receipt.pdf';
    link.click();

    alert('Inscription added successfully!');
    this.loading = false;

  } catch (e) {
    console.error('Error adding inscription: ', e);
    alert('Error adding inscription: ' + e);
    // Handle errors as needed
  }
},






    async checkFileUrls() {
      // Fetch user data from Firestore
      try {
        const userQuerySnapshot = await getDocs(query(collection(db, 'users'), where('email', '==', this.email)));

        if (!userQuerySnapshot.empty) {
          const userData = userQuerySnapshot.docs[0].data();
          this.hasFileUrls = Array.isArray(userData.fileUrls) && userData.fileUrls.length > 0;
          this.backgroundColor = this.hasFileUrls ? 'green' : 'orange';
          this.alreadyExist = true
        }
      } catch (e) {
        console.error('Error checking fileUrls: ', e);
        // Handle errors as needed
      }
    },
    handleFileChange(index) {
      // Implement your file change logic here for individual files
    },
    async submitAllFiles() {
  try {
    // Upload files to Firebase Storage
    this.loading = true;
    const storagePromises = this.files.map(async (file, index) => {
      const storageRef = ref(storage, `files/${this.email}_${Date.now()}_${index + 1}.pdf`);
      await uploadBytes(storageRef, file);
      return getDownloadURL(storageRef);
    });

    const storageUrls = await Promise.all(storagePromises);

    // Update or add files to Firestore
    const userQuerySnapshot = await getDocs(query(collection(db, "users"), where("email", "==", this.email)));

    if (!userQuerySnapshot.empty) {
      // User already exists, update the user document
      const userDoc = userQuerySnapshot.docs[0];
      const userData = {
        fileUrls: storageUrls,
      };

      await updateDoc(doc(db, "users", userDoc.id), userData);
    } else {
      // User does not exist, add a new user document
      const userData = {
        email: this.email,
        fileUrls: storageUrls,
      };

      await addDoc(collection(db, "users"), userData);
    }

    alert('All files uploaded successfully!');
    this.loading = false;

  } catch (e) {
    console.error('Error uploading files: ', e);
    alert('Error uploading files: ' + e);
    // Handle errors as needed

  }
},

    
    showUploadButton(index) {  },
  //   async fetchInscriptions() {
  //   try {
  //     const inscriptionsCollection = collection(db, "inscreptions");
  //     const inscriptionsSnapshot = await getDocs(inscriptionsCollection);
  //     this.inscriptions = inscriptionsSnapshot.docs.map(doc => doc.data());
  //   } catch (error) {
  //     console.error("Error fetching inscriptions: ", error);
  //   }
  // },
  async fetchFormation() {
    try {
      const formationCollection = collection(db, "formation");
      const formationSnapshot = await getDocs(formationCollection);
      this.formation = formationSnapshot.docs.map(doc => doc.data());
    } catch (error) {
      console.error("Error fetching inscriptions: ", error);
    }
  },
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
    async submitFormcursus() {
      try {
        if (true) {
          const querySnapshot = await getDocs(query(collection(db, "users"), where("email", "==", this.email)));
          if (!querySnapshot.empty) {
            // Update the existing user document
            const userDoc = querySnapshot.docs[0];
            await updateDoc(doc(db, "users", userDoc.id), {
              niveau: this.niveau,
              CNE: this.CNE,
              Lycee: this.Lycee,
              anneebac: this.anneebac,
              bac: this.bac,
              diplome: this.diplome,
              anneedip: this.anneedip,
              optionD: this.optionD,
              ville: this.ville,
              ecole: this.ecole,
            });
            const userData = {
              niveau: this.niveau,
              CNE: this.CNE,
              Lycee: this.Lycee,
              anneebac: this.anneebac,
              bac: this.bac,
              diplome: this.diplome,
              anneedip: this.anneedip,
              optionD: this.optionD,
              ville: this.ville,
              ecole: this.ecole,
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
              phone: this.phone,
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
          this.niveau= userData.niveau;
          this.CNE= userData.CNE;
          this.Lycee= userData.Lycee;
          this.bac= userData.bac;
          this.diplome= userData.diplome;
          this.anneedip= userData.anneedip;
          this.anneebac= userData.anneebac;
          this.optionD= userData.optionD;
          this.ville= userData.ville;
          this.ecole= userData.ecole;
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
            niveau: this.niveau,
            CNE: this.CNE,
            Lycee: this.Lycee,
            anneebac: this.anneebac,
            bac: this.bac,
            diplome: this.diplome,
            anneedip: this.anneedip,
            optionD: this.optionD,
            ville: this.ville,
            ecole: this.ecole,
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
        this.fetchInscriptions(); 
        this.fetchFormation();
        this.checkFileUrls();

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
.file-upload-section {
    margin-top: 20px;
  }

  .file-upload-form {
    max-width: 400px;
    margin: 20px auto;
  }

  .form-group {
    margin-bottom: 15px;
  }
  .already-exist-label {
  color: green;
  /* Add any additional styles for the already exist state */
}
/* 
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  } */

  input[type="file"] {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .upload-button {
    background-color: #0056b3;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .upload-button:hover {
    background-color: #0056b3;
  }
.admis-color {
  color: rgb(78, 186, 78);
}
.candidat-color{
  color: orange;
}

.rejected-color {
  color: rgb(246, 0, 0);
}
.inscription-button {
    background-color: #4CAF50;
    color: white;
}
.inscription-button:hover {
    background-color: #4af14f;
    color: white;
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