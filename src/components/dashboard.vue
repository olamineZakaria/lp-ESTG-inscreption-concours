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
                <img src="../assets/images/images.png">
              </div>
              <div id="u-name">Nom Prenom</div>
            </div>
          </div>
          <br><br>
          <hr color="#005596" size="5" noshade width="100%"> 
          <br>
        <!-- <div class="card-body"> -->
          <div class="user-form-wrapper">
              <div class="user-form">
                <h3>A propos de:  Nom Prenom</h3>
                <p><i class="fa fa-id-card" aria-hidden="true"></i><strong> CIN:</strong> {{ userData.cin }}</p>
                <p><i class="fa fa-envelope" aria-hidden="true"></i><strong> Email:</strong> {{ userData.email }}</p>
                <p><i class="fa fa-phone" aria-hidden="true"></i><strong> Téléphone:</strong>{{ userData.number }}</p>
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
                  <input type="text" v-model="nom" required class="green-border" />
                </div>
                <div class="col">
                  <label for="prenom">Prénom:</label>
                  <input type="text" v-model="prenom" required  class="green-border" />
                </div>
              </div>

              <div class="form-group row">
                <div class="col">
                  <label for="email">Email:</label>
                  <input type="email" v-model="email" required  class="green-border" />
                </div>
                <div class="col">
                  <label for="CIN">CIN:</label>
                  <input type="text" v-model="CIN" required  class="green-border"/>
                </div>
              </div>

              <div class="form-group row">
                <div class="col">
                  <label for="pays">Pays:</label>
                  <select name="pays" class="green-border"  >
                    <!-- ... (your existing country options) ... -->
                    <option value="CA">Canada</option>
                        <option value="ML">Mali</option>
                        <option value="MT">Malte</option>
                        <option value="MP">Mariannes du nord, îles</option>
                        <option value="MA">Maroc</option>
                        <option value="ZW">Zimbabwe​​​​​</option>
                  </select>
                </div>
                <div class="col">
                  <div class="col-12">
                    <div class="col-3" style="float:left">
                      <label for="number">Phone</label>
                      <select name="country"  class="green-border" id="country">
                        <option data-countryCode="MA" value="212">Morocco (+212)</option>
                        <option data-countryCode="DZ" value="213">Algeria (+213)</option>
                        <option data-countryCode="AD" value="376">Andorra (+376)</option>
                      </select>
                    </div>
                    <div class="col-9" style="float:right">
                      <br>
                      <label for="number"></label>
                      <input type="text"  class="green-border" placeholder="" />
                    </div>
                  </div>
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
                <div class="col">
                  <label for="salutation">Adress:</label>
                  <input type="text"  class="green-border">
                </div>
              </div>
              <button class="button-65" role="button">Enregistrer</button>
            </form>
          </div>
          <div style="margin-top: 10px;" v-if="currentSection === 'cursus'">
            <br><br>
            <form @submit.prevent="submitForm">
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
              <button class="button-65" role="button">Enregistrer</button>
            </form>
          </div>
          <div v-if="currentSection === 'dossier'">
            <br><br><br>
            <center>
              <div class="wrapper-main-GG">
                <header>Chargement de Mon Dossie</header>
                <form class="setForm" action="#">
                  <input class="file-input-GG" type="file" name="file" hidden>
                  <i class="fas fa-cloud-upload-alt"></i>
                  <p>Parcourir le fichier</p>
                </form>
                <section class="progress-area"></section>
                <section class="uploaded-area"></section>
            </div>
            </center>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSection: 'home',
      userData: {},
      nom: '',
      prenom: '',
      email: '',
      CIN: '',
      pays: '',
      country: '',
      number: '',
      profileImage: '',
      salutation: '',
      bac: '',
      dut: '',
      // ... (other existing data properties)
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
    submitForm() {
      // ... (your existing form submission logic)
    },
    handleImageUpload(event) {
      // ... (your existing image upload logic)
    },
  },
  created() {
    this.showSection('home');

    const userData = localStorage.getItem('userData');
    if (userData) {
      this.userData = JSON.parse(userData);
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
