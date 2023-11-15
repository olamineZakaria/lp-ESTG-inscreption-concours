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
            <!-- Display information inputs here -->
            <label for="nom">Nom:</label>
            <input type="text" v-model="nom" />

            <label for="prenom">Prénom:</label>
            <input type="text" v-model="prenom" />
          </div>
          <div v-if="currentSection === 'cursus'">
            <!-- Display information inputs here -->
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

.nav li.active {
  background-color: white;
}
.a-ptr{
  cursor: pointer;
}

#li_ptr{
  margin-top: 125%;
}
</style>
