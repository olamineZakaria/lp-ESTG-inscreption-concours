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
                <h4>Espace Scolarite - {{ getSectionTitle() }}</h4>
              </div>
              <br>
            </div>
            <div class="clearfix">
  
            </div>
            <br />
            </div>
        </div>
      </section>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        currentSection: 'home', // Assuming 'home' is the default section
      };
    },
    methods: {
      showSection(section) {
        this.currentSection = section;
      },
      deconnexionSection() {
        // Handle logout logic here
      },
      getSectionTitle() {
        // You can customize this method to return section titles based on the currentSection value
        // For example:
        switch (this.currentSection) {
          case 'home':
            return 'Tableau de Board';
          case 'infos':
            return 'Mes informations';
          case 'cursus':
            return 'Mon Cursus';
          case 'dossier':
            return 'Mon dossier';
          case 'inscriptions':
            return 'Mes inscriptions';
          case 'deconnexion':
            return 'Se déconnecter';
          default:
            return '';
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
    
    .loading-spinner-full-page {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.7); /* Semi-transparent white background */
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999; /* Adjust the z-index to make sure it appears on top of other elements */
    }
  
    .spinner {
      border: 4px solid rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      border-top: 4px solid #3498db;
      width: 40px;
      height: 40px;
      animation: spin 1s linear infinite;
    }
  
  
  
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