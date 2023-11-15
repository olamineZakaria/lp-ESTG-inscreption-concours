<template>
  <div id="app">
    <section>
      <div class="left-div">
        <img alt="sas" src="../../public/favicon.ico" class="support">
        <br>
        <br>
        <ul class="nav">
          <li :class="{ 'active': currentSection === 'infos' }" >
            <a class="a-ptr" @click="showInfoSection('infos')"><i class="fa fa-user"></i>Mes informations</a>
          </li>
          <li :class="{ 'active': currentSection === 'cursus' } " ><a class="a-ptr" @click="showCursusSection('cursus')"><i class="fa fa-graduation-cap"></i>Mon Cursus</a></li>
          <li :class="{ 'active': currentSection === 'inscriptions' }"><a class="a-ptr" @click="showInscreptionSection('inscriptions')"><i class="fa fa-user-plus"></i>Mes inscriptions</a></li>
          <li :class="{ 'active': currentSection === 'dossier' }"><a class="a-ptr"  @click="showDossierSection('dossier')"><i class="fa fa-folder"></i>Mon dossier</a></li>
          <li :class="{ 'active': currentSection === 'parametres' }"><a class="a-ptr" @click="showParametresSection('parametres')"><i class="fa fa-cogs"></i>Paramètres</a></li>
          <li :class="{ 'active': currentSection === 'deconnexion' } " id="li_ptr"><a class="a-ptr" @click="deconnexionSection()"><i class="fa fa-sign-out "></i>Se déconnecter</a></li>
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
                  <label for="dob">Date de naissance:</label>
                  <input type="date" v-model="dateOfBirth" required />
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
                  <label for="telephone">Téléphone:</label>
                  <div class="input-group">
                    <select v-model="countryCode" class="custom-select">
                      <!-- Add country codes according to your needs -->
                      <option value="+1">+1 (USA)</option>
                      <option value="+33">+33 (France)</option>
                      <!-- Add more options as needed -->
                    </select>
                    <input type="text" v-model="telephone" class="form-control" placeholder="Enter your phone number" />
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

              <button type="submit">Submit</button>
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
      nom: '', // Replace with actual user data
      prenom: '',
      bac:'',
      dut:'', // Replace with actual user data
      // ... other data properties ...
    };
  },
  methods: {
    showInfoSection(section) {
      this.currentSection = section;
    },
    showCursusSection(section){
      this.currentSection = section;
    },
    showInscreptionSection(section){
      this.currentSection=section;
    },
    showDossierSection(section){
      this.currentSection=section;
    },
    showParametresSection(section){
      this.currentSection=section;
    },
    deconnexionSection() {
      // Perform any logout logic if needed
      // ...

      // Redirect to the "welcome" page
      this.$router.push('/welcome');
    },
    // showdashboardSection(){
    //   this.currentSection=section;
    // },
    getSectionTitle(){
      switch (this.currentSection) {
        case 'infos':
          return 'Mes Information';
        case 'cursus':
          return 'Mon Cursus Scolaire';
        case 'inscriptions':
          return 'Mes Inscreption';
        case 'dossier':
          return 'Mon Dossier';
        case 'parametres':
        return 'Parametres';
        default:
          return '';
      }
    }
  },
};
</script>

<style>
@import '../assets/trable.css';

.custom-select {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

</style>
