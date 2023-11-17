<template>
  <div id="app">
    <section>
      <div class="left-div">
        <img alt="sas" src="../../public/favicon.ico" class="support">
        <br>
        <br>
        <ul class="nav">
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
          <li :class="{ 'active': currentSection === 'inscriptions' }">
            <a class="a-ptr" @click="showSection('inscriptions')">
              <i class="fa fa-user-plus"></i>Mes inscriptions
            </a>
          </li>
          <li :class="{ 'active': currentSection === 'dossier' }">
            <a class="a-ptr" @click="showSection('dossier')">
              <i class="fa fa-folder"></i>Mon dossier
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
          <br>
          <div class="head">
            <div class="col-div-6">
              <h4>Espace Candidat - {{ getSectionTitle() }}</h4>
            </div>
            <div class="col-div-6">
              <h3>Nom prenom</h3>
            </div>
            <br>
          </div>
          <div class="clearfix"></div>
          <br /><br /><br />
          <div v-if="currentSection === 'infos'">
            <form @submit.prevent="submitForm">
              <div class="form-group row">
                <div class="col">
                  <label for="nom">Nom:</label>
                  <input type="text" v-model="nom" required />
                </div>
                <div class="col">
                  <label for="prenom">Prénom:</label>
                  <input type="text" v-model="prenom" required />
                </div>
              </div>

              <div class="form-group row">
                <div class="col">
                  <label for="email">Email:</label>
                  <input type="email" v-model="email" required />
                </div>
                <div class="col">
                  <label for="CIN">CIN:</label>
                  <input type="text" v-model="CIN" required />
                </div>
              </div>

              <div class="form-group row">
                <div class="col">
                  <label for="pays">Pays:</label>
                  <select name="pays" class="custom-select">
                    <!-- ... (your existing country options) ... -->
                  </select>
                </div>
                <div class="col">
                  <div class="col-12">
                    <div class="col-3" style="float:left">
                      <label for="country">Country</label>
                      <select name="country" id="country">
                        <!-- ... (your existing country options) ... -->
                      </select>
                    </div>
                    <div class="col-9" style="float:right">
                      <label for="number">Phone</label>
                      <input type="text" placeholder="" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- New image upload field -->
              <div class="form-group row">
                <div class="col">
                  <label for="profileImage">Image de profil:</label>
                  <input type="file" @change="handleImageUpload" accept="image/*" />
                  <img v-if="profileImage" :src="profileImage" alt="Profile Preview" class="profile-preview" />
                </div>
                <div class="col">
                  <label for="salutation">Adress:</label>
                  <input type="text">
                </div>
              </div>
              <div class="form-group row">
                <div class="col">
                  <label for="salutation">Civilité:</label>
                  <select v-model="salutation" class="custom-select">
                    <option value="M.">M.</option>
                    <option value="Mlle">Mlle</option>
                    <option value="Mme">Mme</option>
                  </select>
                </div>
              </div>

              <button class="button-65" role="button">Button 65</button>
            </form>
          </div>
          <div v-if="currentSection === 'cursus'">
            <label for="bac">bac:</label>
            <input type="text" v-model="bac" />

            <label for="dut">dut:</label>
            <input type="text" v-model="dut" />
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
      currentSection: null,
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
      // ... your logout logic ...
      this.$router.push('/welcome');
    },
    getSectionTitle() {
      switch (this.currentSection) {
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
  },
};
</script>

<style>
@import '../assets/trable.css';
/* Add your custom styles here */
</style>
