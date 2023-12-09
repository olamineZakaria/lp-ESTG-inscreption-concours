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
          <li :class="{ 'active': currentSection === 'selection' }">
            <a class="a-ptr" @click="showSection('selection')">
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
          <div style="margin-top: 10px;" v-if="currentSection === 'selection'">
            <div>
                <input type="file" @change="handleCSVUpload" />
                <span v-if="uploadSuccess" style="color: green;">CSV uploaded successfully!</span>
          </div>
         </div>
          <div style="margin-top: 10px;" v-if="currentSection === 'home'">
          <div class="col-div-4-1">
            <div class="box">
              <p class="head-1">La Moyenne Minimale</p>
              <p class="number">{{ minMoyenne }}</p>
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
          <div class="col-div-4-1" > <!-- Add margin-left for space -->
          <div class="box-8">
            <!-- Adjust the width and height of the canvas as needed -->
            <canvas id="myBarChart" width="200" height="200" ></canvas>
          </div>
        </div>
          <div class="col-div-4-1" style="margin-left: 40px;">
          <div class="box-8">
            <!-- Adjust the width and height of the canvas as needed -->
            <canvas id="myPieChart" width="200" height="200"></canvas>
          </div>
        </div>
       
        </div>

          <!-- // -->
          <div style="margin-top: 10px;" v-if="currentSection === 'Candidat'">
            <button @click="exportToExcel" class="excel-button">Export to Excel</button>
                <table>
                  <thead>
                  <tr>
                      <th>Nom</th>
                      <th>Prenom</th>
                      <th>CIN</th>
                      <th>CNE</th>
                      <th>Date de naissance</th>
                      <th>Diplome</th>
                      <th>Option</th>
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
                      <td>{{ user.datenaissance }}</td>
                      <td>{{ user.diplome }}</td>
                      <td>{{ user.optionD }}</td>
                      <td>{{ user.email }}</td>
                      <td>{{ user.moyenne }}</td> <!-- Display moyenne for each user -->

                      <!-- Add more columns as needed based on your user data structure -->
                  </tr>
                  </tbody>
              </table>

          </div>
          <div style="margin-top: 10px;" v-if="currentSection === 'infos'">
            <div style="margin-bottom: 20px; display: flex; align-items: flex-start;">
            <form @submit.prevent="addFormation">
              <label>Programme:</label>
              <input id="text" v-model="newFormation.programme" style="width: 300px;" />

              <label for="descriptif">Descriptif:</label>
              <input type="file" id="descriptif" ref="descriptifInput" @change="handleDescriptifUpload" style="width: 300px;" />
              <span v-if="newFormation.description">File Uploaded: {{ newFormation.description }}</span>

              <label for="image">Image:</label>
              <input type="file" id="image" ref="imageInput" @change="handleImageUpload" style="width: 300px;" />
              <label for="dateFin">Date Fin:</label>
              <input type="date" id="dateFin" v-model="newFormation.dateFin" style="width: 300px;" />
              <br><br>
              <button style="float: left;" class="button-65" type="submit">Ajouter une Formation</button>
            </form>
            <table style="float: left;">
            <thead>
              <tr>
                <th>Programme</th>
                <th>Descriptif</th>
                <th>Image</th>
                <th>Date Fin</th>
              </tr>
            </thead>
            <tbody>
              <!-- Loop through each formation and display its details -->
              <tr v-for="(formation, index) in formations" :key="index">
                <td>{{ formation.programme }}</td>
                <td> <a :href="formation.descreption">{{ formation.programme }}</a></td>
                <td>
                  <!-- Display the image, you may need to adjust this based on how you store images -->
                  <img :src="formation.image" alt="Formation Image" style="max-width: 50px; max-height: 50px;" />
                </td>
                <td>{{ formation.datefin }}</td>
                <td>
        <!-- Add icons for delete and modifier with corresponding click events -->
                <span @click="deleteCondition(index)" style="cursor: pointer; margin-right: 10px;">🗑️</span>
                <span @click="editCondition(index)" style="cursor: pointer;">✏️</span>
              </td>
              </tr>
            </tbody>
          </table>
          </div>
          <hr color="#005596" size="5" noshade="" width="100%">
          <div style="margin-top: 20px; margin-bottom: 20px; display: flex; align-items: flex-start;">
            <form @submit.prevent="addDocument">
              <label>Dossier de candidateur:</label>
              <input id="text" v-model="newDocument.documentType" style="width: 300px;" />
              <br><br>
              <button style="float: left;" class="button-65" type="submit">Ajouter un document</button>
            </form>
            <table style="float: left;">
              <!-- Your table content here -->
                <thead>
                  <tr>
                    <th>Dossier de candidateur</th>
                    <!-- Add more headers as needed -->
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(dossier, index) in dossiers" :key="index">
                  <td>{{ dossier.documentType }}</td>
                  <td>
        <!-- Add icons for delete and modifier with corresponding click events -->
                  <span @click="deleteCondition(index)" style="cursor: pointer; margin-right: 10px;">🗑️</span>
                  <span @click="editCondition(index)" style="cursor: pointer;">✏️</span>
                </td>
                  </tr>
                </tbody>
            </table>
          </div>
          <hr color="#005596" size="5" noshade="" width="100%">
          <div style="margin-top: 20px; margin-bottom: 20px; display: flex; align-items: flex-start;">
            <form @submit.prevent="addCondition">
              <label for="programme">Guide d'inscreption:</label>
              <input type="file" id="descriptif" ref="descriptifInput" @change="handleDescriptifUpload" style="width: 300px;" />
              <br><br>
              <button style="float: left;" class="button-65" type="submit">Ajouter un Guide</button>
            </form>
            <table style="float: left;">
              <!-- Your table content here -->
                <thead>
                  <tr>
                    <th>Guide d'inscreption</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(documentconcours, index) in documentconcoursList" :key="index">
                    <td><a :href="documentconcours.file">Guide d'inscreption</a></td>
                    <td>
        <!-- Add icons for delete and modifier with corresponding click events -->
                      <span @click="deleteCondition(index)" style="cursor: pointer; margin-right: 10px;">🗑️</span>
                      <span @click="editCondition(index)" style="cursor: pointer;">✏️</span>
                    </td>
                  </tr>
                </tbody>
            </table>
          </div>
          <hr color="#005596" size="5" noshade="" width="100%">
          <div style="margin-top: 20px; display: flex; align-items: flex-start;">
            <form @submit.prevent="handleSubmit">
              <label for="programme">Conditions d'admission</label>
              <input id="text" v-model="newCondition.title" style="width: 300px;" />
              <br><br>
              <button style="float: left;" class="button-65" type="submit">{{ editMode ? 'Modifier une Condition' : 'Ajouter une condition' }}</button>
            </form>
            <table style="float: left;">
            <thead>
              <tr>
                <th>Conditions d'admission</th>
                <!-- Add more headers as needed -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="(condition, index) in condition" :key="index">
                <td>{{ condition.title }}</td>
                <td>
        <!-- Add icons for delete and modifier with corresponding click events -->
                <span @click="deleteCondition(index)" style="cursor: pointer; margin-right: 10px;">🗑️</span>
                <span @click="editCondition(index)" style="cursor: pointer;">✏️</span>
              </td>
                <!-- Add more data columns as needed -->
              </tr>
            </tbody>
          </table>
          </div>
          </div>
          </div>
          </div>
    </section>
  </div>
</template>
<script>
import { collection, addDoc, deleteDoc, updateDoc, doc, getDocs, getFirestore, query, where  } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import firebaseApp from '../scripts/firebaseConfig';
import Chart from 'chart.js/auto';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';

const db = getFirestore(firebaseApp);

export default {
  
  data() {
    return {
      condition: [],
      formations: [], // Array to store fetched formations
      dossiers: [], // Array to store fetched dossiers
      documentconcoursList: [], // Array to store fetched documentconcours

      editMode: false, // Flag to determine whether you are in edit mode
      editIndex: null, 
      newDocument:{
        documentType:'',
      },
      newCondition:{
        title:'',
      },
      newFormation: {
      dateFin: '',
      description: '',
      image: '',
      programme: ''
      },
      diplomaCounts: {},
      barChart: null, // Added a property to store the chart instance
      currentSection: 'infos', // Assuming 'home' is the default section
      usersData: [], 
      numberOfUsers: 0,
      maxMoyenne: 0,
      minMoyenne:0,
      diplomeArraya: [],
      countArrayaa : [],
      optionDArray: [],
      countArrayOptionD: [],
      // ya
      uploadSuccess: false,

    };

  },
  methods: {
    async handleCSVUpload(event) {
      const file = event.target.files[0];
      const csvData = await this.readFile(file);

      // Parse CSV data
      const parsedData = await this.parseCSV(csvData);

      // Upload to Firestore
      await this.uploadToFirestore(parsedData);
      this.uploadSuccess = true;
    },
    readFile(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.readAsText(file);
      });
    },
    parseCSV(csvData) {
      return new Promise((resolve) => {
        Papa.parse(csvData, {
          header: true,
          dynamicTyping: true,
          complete: (results) => {
            resolve(results.data);
          },
        });
      });
    },
    async uploadToFirestore(data) {
      const db = getFirestore();
      const collectionRef = collection(db, 'admis'); // Replace with your actual collection name

      for (const item of data) {
        await addDoc(collectionRef, item);
      }
    },
    async addDocumentConcours() {
      // Your addDocumentConcours logic here
    },

    async fetchDocumentConcours() {
      try {
        const db = getFirestore(); // Assuming firebaseApp is initialized globally
        const documentconcoursCollection = collection(db, 'documentconcours');
        const documentconcoursSnapshot = await getDocs(documentconcoursCollection);

        // Map the documents to an array of documentconcours objects
        this.documentconcoursList = documentconcoursSnapshot.docs.map(doc => doc.data());
      } catch (error) {
        console.error('Error fetching documentconcours:', error);
      }
    },
    async fetchDossiers() {
      try {
        const db = getFirestore(); // Assuming firebaseApp is initialized globally
        const dossiersCollection = collection(db, 'Dossier');
        const dossiersSnapshot = await getDocs(dossiersCollection);

        // Map the documents to an array of dossier objects
        this.dossiers = dossiersSnapshot.docs.map(doc => doc.data());
      } catch (error) {
        console.error('Error fetching dossiers:', error);
      }
    },
    async fetchFormations() {
      try {
        const db = getFirestore(); // Assuming firebaseApp is initialized globally
        const formationsCollection = collection(db, 'formation');
        const formationsSnapshot = await getDocs(formationsCollection);

        // Map the documents to an array of formation objects
        this.formations = formationsSnapshot.docs.map(doc => doc.data());
      } catch (error) {
        console.error('Error fetching formations:', error);
      }
    },
    async updateCondition() {
      try {
        const db = getFirestore();
        const conditionsCollection = collection(db, "condition");

        // Get the document ID of the condition being edited
        const conditionId = this.condition[this.editIndex].id;

        // Reference to the specific document
        const conditionDocRef = doc(conditionsCollection, conditionId);

        // Update the document with the new data
        await updateDoc(conditionDocRef, {
          title: this.newCondition.title,
          // Add other fields as needed
        });

        // Update the conditions array locally
        this.$set(this.condition, this.editIndex, {
          id: conditionId,
          title: this.newCondition.title,
          // Update other fields as needed
        });
      } catch (error) {
        console.error("Error updating condition:", error);
      }
    },
    async handleSubmit() {
      try {
        if (this.editMode) {
          // Update the condition in edit mode
          await this.updateCondition();
        } else {
          // Add a new condition in add mode
          await this.addCondition();
        }

        // Clear the form and reset the mode after submitting
        this.newCondition.title = "";
        this.editMode = false;
        this.editIndex = null;
      } catch (error) {
        console.error("Error submitting condition:", error);
      }
    },
    editCondition(index) {
      // Set edit mode, populate the form with the selected condition's data
      this.editMode = true;
      this.editIndex = index;
      this.newCondition.title = this.condition[index].title;
    },
    async loadConditions() {
      try {
        // Load existing conditions from Firestore
        const conditionsCollection = collection(db, 'condition');
        const conditionsSnapshot = await getDocs(conditionsCollection);
        this.condition = conditionsSnapshot.docs.map(doc => doc.data());
      } catch (error) {
        console.error('Error loading conditions:', error);
      }
    },
    async addCondition() {
      try {
        // Add the new condition to Firestore
        const conditionsCollection = collection(db, 'condition');
        const newConditionRef = await addDoc(conditionsCollection, this.newCondition);

        // Get the updated list of conditions
        const conditionsSnapshot = await getDocs(conditionsCollection);
        this.conditions = conditionsSnapshot.docs.map(doc => doc.data());

        // Clear the form
        this.newCondition = {
          title: '',
          // Reset other properties as needed
        };

        console.log('Condition added successfully with ID:', newConditionRef.id);
      } catch (error) {
        console.error('Error adding condition:', error);
      }
    },
    exportToExcel() {
      // Extract only the columns you want to export
      const exportData = this.usersData.map(user => {
        return {
          Nom: user.nom,
          Prenom: user.prenom,
          CIN: user.cin,
          CNE: user.CNE,
          'Date de naissance': user.datenaissance,
          Diplome: user.diplome,
          Option: user.optionD,
          Email: user.email,
          Moyenne: user.moyenne,
          // Add more columns as needed
        };
      });

      const ws = XLSX.utils.json_to_sheet(exportData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

      const date = new Date().toISOString().slice(0, 10);
      const filename = `user_data_${date}.xlsx`;

      XLSX.writeFile(wb, filename);
    },
    // Your other methods
    async createBarChart() {
  try {
    const db = getFirestore(firebaseApp);
    const usersCollection = collection(db, 'users');

    // Adding a where condition to filter users where statut is true
    const querySnapshot = await getDocs(query(usersCollection, where('statut', '==', 'true')));

    // Initialize local variables instead of using class instance variables
    const diplomaCounts = {};
    const diplomeArray = [];
    const countArray = [];
    const backgroundColors = [];

    querySnapshot.forEach(doc => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      const data = doc.data();
      const diploma = data.diplome;

      // Use regular assignment to update the diplomaCounts object
      diplomaCounts[diploma] = (diplomaCounts[diploma] || 0) + 1;
      backgroundColors.push(color);
    });

    // Extract diplomes and counts from the diplomaCounts object
    for (const [diplome, count] of Object.entries(diplomaCounts)) {
      diplomeArray.push(diplome);
      countArray.push(count);
    }

    // Assign to this.diplomeArraya and this.countArraya
    this.diplomeArraya = diplomeArray;
    this.countArraya = countArray;

    // Get the canvas context
    const canvas = document.getElementById('myBarChart');
    const ctx = canvas.getContext('2d');

    // Log the arrays
    console.log('Diploma Counts:', this.diplomaCounts);
    console.log('Labels:', diplomeArray);
    console.log('Data:', countArray);

    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: diplomeArray,
        datasets: [
          {
            label: 'Nombre des candidats par diplome',
            data: countArray,
            backgroundColor: backgroundColors,
            borderColor: backgroundColors,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Type diplome',
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Nombre des candidats',
            },
            // Update the ticks property to set the interval
            ticks: {
              stepSize: 5, // Set the interval between ticks
              beginAtZero: true,
            },
          },
        },
      },
    });
  } catch (error) {
    console.error('Error creating bar chart:', error);
  }
},


// async fetchDiplomaCounts() {
//   try {
//     const db = getFirestore(firebaseApp);
//     const usersCollection = collection(db, 'users');
//     const snapshot = await getDocs(usersCollection);

//     // Initialize local variables instead of using class instance variables
//     const diplomaCounts = {};
//     const diplomeArray = [];
//     const countArray = [];

//     snapshot.forEach(doc => {
//       const data = doc.data();
//       const diploma = data.diplome;

//       // Use regular assignment to update the diplomaCounts object
//       diplomaCounts[diploma] = (diplomaCounts[diploma] || 0) + 1;
//     });

//     // Extract diplomes and counts from the diplomaCounts object
//     for (const [diplome, count] of Object.entries(diplomaCounts)) {
//       diplomeArray.push(diplome);
//       countArray.push(count);
//     }

//     // Assign to this.diplomeArraya and this.countArraya
//     this.diplomeArraya = diplomeArray;
//     this.countArraya = countArray;

//     // Log the arrays
//     // alert('Diplomes Array:' + this.diplomeArraya);
//     // alert('Count Array:' + this.countArraya);
//   } catch (error) {
//     console.error('Error fetching diploma counts:', error);
//   }
// },


    generateHorizontalBarChart() {
  // Assuming you have some data for the horizontal bar chart
  const data = [25, 35, 40];
  const labels = ['Label 1', 'Label 2', 'Label 3'];
  const colors = ['#FF6384', '#36A2EB', '#FFCE56'];

  const ctx = document.getElementById('myHorizontalBarChart').getContext('2d');

  // Destroy the existing chart instance to prevent conflicts
  if (this.horizontalBarChart) {
    this.horizontalBarChart.destroy();
  }

  this.horizontalBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      }],
    },
    options: {
      indexAxis: 'y', // Set the index axis to 'y' for horizontal bar chart
      scales: {
        x: {
          beginAtZero: true,
        },
      },
      // Additional chart options if needed
    },
  });
},
async generatePieChart() {
  try {
    // const letters = '0123456789ABCDEF';
    // let color = '#';
    // for (let i = 0; i < 6; i++) {
    //   color += letters[Math.floor(Math.random() * 16)];
    // }
    const db = getFirestore(firebaseApp);
    const usersCollection = collection(db, 'users');

    // Adding a where condition to filter users where statut is true
    const querySnapshot = await getDocs(query(usersCollection, where('statut', '==', 'true')));

    const optionDCounts = {};
    const optionDArray = [];
    const countArray = [];
    const backgroundColors = [];


    querySnapshot.forEach(doc => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      const data = doc.data();
      const optionD = data.optionD;

      optionDCounts[optionD] = (optionDCounts[optionD] || 0) + 1;
      backgroundColors.push(color);

    });

    for (const [optionD, count] of Object.entries(optionDCounts)) {
      optionDArray.push(optionD);
      countArray.push(count);
      // backgroundColors.push(color);
    }

    // Assuming these are instance variables
    this.optionDArray = optionDArray;
    this.countArrayOptionD = countArray;

    // Get the canvas context
    const ctx = document.getElementById('myPieChart').getContext('2d');

    // Create the doughnut chart with additional options
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: optionDArray,
        datasets: [{
          data: countArray, // Use countArray instead of optionDArray for data
          backgroundColor: backgroundColors,
          hoverBackgroundColor: backgroundColors.map(color => color.replace('0.2', '1')),
        }],
      },
      options: {
        // Additional chart options
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Distribution of Option D',
          fontSize: 16,
        },
        legend: {
          display: true,
          position: 'bottom',
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              const label = data.labels[tooltipItem.index];
              const value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
              return `${label}: ${value}`;
            },
          },
        },
      },
    });
  } catch (error) {
    console.error('Error generating pie chart:', error);
  }
},


    async addFormation() {
      try {
        // Assuming you have a form or input fields to collect formation data
        const formationData = {
          // Replace these with actual form data
          name: "New Formation",
          description: "Description of the new formation",
          // Add other properties as needed
        };

        // Add a new document to the "formations" collection
        const docRef = await addDoc(collection(db, "formation"), formationData);

        console.log("Formation added with ID: ", docRef.id);
      } catch (error) {
        console.error("Error adding formation: ", error);
      }
    },
    async deleteFormation() {
      try {
        // Replace 'formationId' with the actual ID of the formation you want to delete
        await deleteDoc(doc(db, "formations", "formationId"));
        console.log("Formation deleted successfully");
      } catch (error) {
        console.error("Error deleting formation: ", error);
      }
    },
    async modifyFormation() {
      try {
        // Replace 'formationId' with the actual ID of the formation you want to modify
        const formationRef = doc(db, "formations", "formationId");

        // Assuming you have updated formation data
        const updatedData = {
          name: "Updated Formation Name",
          description: "Updated description",
          // Add other properties as needed
        };

        // Update the document with the new data
        await updateDoc(formationRef, updatedData);

        console.log("Formation updated successfully");
      } catch (error) {
        console.error("Error modifying formation: ", error);
      }
    },
    async countUsers() {
    try {
        // Reference to the "users" collection
        const usersCollection = collection(db, 'users');

        // Adding a where condition to filter users where statut is true
        const querySnapshot = await getDocs(query(usersCollection, where('statut', '==', 'true')));
        const numberOfUsers = querySnapshot.size;

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
    const usersCollection = collection(db, 'users');
    
    // Adding a where condition to filter users where statut is true
    const querySnapshot = await getDocs(query(usersCollection, where('statut', '==', 'true')));

    this.usersData = querySnapshot.docs.map(doc => {
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
      user.moyenne = (((user.Ns1 + user.Ns2 + user.Ns3 + user.Ns4) / 4) * 0.75 + (user.Nbac * 0.25)).toFixed(4);
      
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
          return 'La list des candidats';
        case 'infos':
          return 'Informations';
        case 'selection':
          return 'Les candidats admis';
        case 'inscriptions':
          return 'Mes inscriptions';
        case 'deconnexion':
          return 'Se déconnecter';
        default:
          return '';
      }
    },
    calculateDiplomeCounts() {
    const diplomeCounts = {};

    // Count the number of users for each diplome
    this.usersData.forEach(user => {
      const diplome = user.diplome;

      if (diplome) {
        diplomeCounts[diplome] = (diplomeCounts[diplome] || 0) + 1;
      }
    });

    return diplomeCounts;
  },
    async refreshHomeData() {
      // Call the necessary methods to fetch and update data for the "home" section
      await this.fetchUsers();
      await this.countUsers();
      await this.createBarChart();
      this.generatePieChart();

      // Add any other methods needed to refresh the data

      // Optionally, you can also log a message to indicate that the data has been refreshed
      console.log('Data in the home section has been refreshed.');
    },
    showSection(section) {
      // Check if the current section is changing
      if (this.currentSection !== section) {
        this.currentSection = section;

        // Check if the new section is 'home' and refresh the data
        if (section === 'home') {
          this.refreshHomeData();
        }
      }
    },
  
  },
  async created() {
    await this.loadConditions();
  },
  mounted() {
      this.showSection("home");
      this.fetchUsers();
      this.fetchDossiers();
      this.countUsers();
      // this.fetchDiplomaCounts();
      this.generatePieChart();
      // this.generateHorizontalBarChart()
      this.createBarChart();
      this.fetchFormations();
      this.fetchDocumentConcours();

      // this.loadConditions();

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
.excel-button {
  background-color: #4caf50; /* Green background color */
  border: none; /* Remove borders */
  color: white; /* White text color */
  padding: 10px 15px; /* Padding */
  text-align: center; /* Center text */
  text-decoration: none; /* Remove underline */
  display: inline-block; /* Display as inline-block */
  font-size: 16px; /* Increase font size */
  cursor: pointer; /* Cursor pointer on hover */
  border-radius: 5px;
  float: right; /* Align the button to the right */
 /* Rounded corners */
}
.icon {
  width: 20px; /* Set width of the icon */
  height: 20px; /* Set height of the icon */
  margin-right: 5px; /* Add some margin to the right of the icon */
}

</style>