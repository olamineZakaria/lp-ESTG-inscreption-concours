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
          <div v-if="currentSection === 'home'">
          <div id="profile-upper">
            <div id="profile-banner-image">
              <img src="../assets/images/Guelmim_02.jpg" alt="Banner image">
            </div>
            <div id="profile-d">
              <div id="profile-pic">
                <img src="../assets/images/photo.jpeg">
              </div>
              <div id="u-name">Olamine zakaria</div>
            </div>
          </div>
          </div>
          <div v-if="currentSection === 'infos'">
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
                  </select>
                </div>
                <div class="col">
                  <div class="col-12">
                    <div class="col-3" style="float:left">
                      <label for="country">Country</label>
                      <select name="country"  class="green-border" id="country">
                        <!-- ... (your existing country options) ... -->
                      </select>
                    </div>
                    <div class="col-9" style="float:right">
                      <label for="number">Phone</label>
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
          <div v-if="currentSection === 'cursus'">
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
                  <label for="salutation">Établissement</label>
                  <select v-model="salutation" class="green-border">
                  </select>
                </div>
                <div class="col">
                  <label for="salutation">Adress:</label>
                  <input type="text">
                </div>
              </div>
              <button class="button-65" role="button">Enregistrer</button>
            </form>
          </div>
          <div v-if="currentSection === 'dossier'">
            
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
    };
  },
  methods: {
    showSection(section) {
      this.currentSection = section;
    },
    deconnexionSection() {
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
      // ... your form submission logic ...
    },
    handleImageUpload(event) {
      // ... your image upload logic ...
    },
    created() {
    this.showSection('home'); // Set the initial section to 'home'
  },
  },
};
</script>

<style>
@import '../assets/trable.css';
/* Add your custom styles here */
</style>
