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
                <i class="fa fa-user"></i>Informations
              </a>
            </li>
            <li :class="{ 'active': currentSection === 'Candidat' }">
              <a class="a-ptr" @click="showSection('Candidat')">
                <i class="fa fa-graduation-cap"></i>Candidat
              </a>
            </li>
            <li :class="{ 'active': currentSection === 'dossier' }">
              <a class="a-ptr" @click="showSection('dossier')">
                <i class="fa fa-folder"></i>Selection
              </a>
            </li>
            <li :class="{ 'active': currentSection === 'inscriptions' }">
              <a class="a-ptr" @click="showSection('inscriptions')">
                <i class="fa fa-user-plus"></i>
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
            <div class="clearfix"></div>
            <br />
            <div style="margin-top: 10px;" v-if="currentSection === 'home'">
            <div class="col-div-4-1">
            <div class="box">
                <p class="head-1">La Moyenne Minimale</p>
                <p class="number">{{minMoyenne}}</p>
            </div>
	        </div>
            <div class="col-div-4-1">
                <div class="box">
                    <p class="head-1">La Moyenne Maximale</p>
                    <p class="number">{{ maxMoyenne }}</p>
                </div>
            </div>
            <div class="col-div-4-1">
                <div class="box">
                    <p class="head-1">Nombre des candidats</p>
                    <p class="number">{{ numberOfUsers }}</p>
                </div>
            </div>
            </div>
            <!-- // -->
            <div style="margin-top: 10px;" v-if="currentSection === 'Candidat'">
                <table>
                    <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>CIN</th>
                        <th>CNE</th>
                        <th>Email</th>
                        <th>Moyenne</th>
                        <!-- Add more columns as needed based on your user data structure -->
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(user, index) in usersData" :key="index">
                        <td>{{ user.nom }}</td>
                        <td>{{ user.prenom }}</td>
                        <td>{{ user.cin }}</td>
                        <td>{{ user.CNE }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.moyenne }}</td> <!-- Display moyenne for each user -->

                        <!-- Add more columns as needed based on your user data structure -->
                    </tr>
                    </tbody>
                </table>
            </div>

            </div>
            </div>
      </section>
    </div>
  </template>
  <script>
  import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
  import firebaseApp from '../scripts/firebaseConfig';
  
  const db = getFirestore(firebaseApp);
  
  export default {
    data() {
      return {
        currentSection: 'Candidat', // Assuming 'home' is the default section
        usersData: [], 
        numberOfUsers: 0,
        maxMoyenne: 0,
        minMoyenne:0,
      };
    },
    methods: {
        async countUsers() {
      try {
        // Reference to the "users" collection
        const usersCollection = collection(db, 'users');

        // Get a snapshot of the collection and return the size
        const usersSnapshot = await getDocs(usersCollection);
        const numberOfUsers = usersSnapshot.size;

        // Log or use the count as needed
        console.log('Number of users:', numberOfUsers);

        // You can store the count in a data property if you need to use it in the component
        this.numberOfUsers = numberOfUsers;

        // Return the count if needed in other parts of your application
        return numberOfUsers;
      } catch (error) {
        console.error('Error counting users:', error);
      }
    },
        async fetchUsers() {
    try {
        const usersCollection = collection(db, 'users'); // Assuming 'users' is your collection name
        const usersSnapshot = await getDocs(usersCollection);
        this.usersData = usersSnapshot.docs.map(doc => {
            const user = doc.data();

            // Convert relevant values to numbers
            user.Ns1 = parseFloat(user.Ns1);
            user.Ns2 = parseFloat(user.Ns2);
            user.Ns3 = parseFloat(user.Ns3);
            user.Ns4 = parseFloat(user.Ns4);
            user.Nbac = parseFloat(user.Nbac);

            // Check if all required values are valid numbers
            const isValidNumber = (value) => typeof value === 'number' && !isNaN(value);
            if (!isValidNumber(user.Ns1) || !isValidNumber(user.Ns2) || !isValidNumber(user.Ns3) || !isValidNumber(user.Ns4) || !isValidNumber(user.Nbac)) {
                console.error('One or more values are not valid numbers. Check your data.');
                return user; // Skip this user to avoid NaN in moyenne
            }

            // Calculate the moyenne for each user and store it in the user object
            user.moyenne = ((user.Ns1 + user.Ns2 + user.Ns3 + user.Ns4) / 4) * 0.75 + (user.Nbac * 0.25);
            
            return user;
        });
        this.minMoyenne = this.calculateMinMoyenne();
        this.maxMoyenne = this.calculateMaxMoyenne();

        

        // Optional: You can log the updated usersData array to verify the moyenne values
        console.log('Updated usersData:', this.usersData);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
    
},
    calculateMinMoyenne(){
        if (this.usersData.length === 0) {
            return 0;// Return 0 if there are no users
        }
        const minMoyenne = Math.min(...this.usersData.map(user => user.moyenne));
        return minMoyenne;

    },
    calculateMaxMoyenne() {
      if (this.usersData.length === 0) {
        return 0;// Return 0 if there are no users
      }

      // Assume moyenne is a numeric property in your user data
      const maxMoyenne = Math.max(...this.usersData.map(user => user.moyenne));

      return maxMoyenne;
    },

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
          case 'Candidat':
            return 'Candidat';
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
    mounted() {
        this.fetchUsers();
        this.countUsers();
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