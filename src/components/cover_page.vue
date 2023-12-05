<!-- src/components/cover_page.vue -->
<template>
    <div class="full-page">
        <div class="navbar">
            <div class="navbar-title">LP-ESTG</div>
            <a href="#Formations">Formations</a>
            <a href="#Conditions-admission">Conditions d'admission</a>
            <a href="#Dossier-candidature">Dossier de candidature</a>
            <a href="#Dates-important">Dates importants</a>
        </div>
        <br>
        <div class="banner-slide">
            <div class="banner-overlay">
                <div class="banner-content">
                    <h1>Ecole Supérieure de Technologie Guelmim</h1>
                    <p>Concours Licence Professionnelle</p>
                    <p><u>Annee universitaire 2023-2024</u></p>
                    <br>
                    <br>
                    <a href="/welcome" class="button">Inscription</a>
                </div>
            </div>
        </div>
        <div class="services_section layout_padding">
            <div class="container">
                <h1 id="Formations" class="services_taital"><span style="color: #005596">Formations</span></h1>
                <div class="services_section_2">
                    <center>
                        <div class="row">
                            <div v-for="(formation, index) in formationArray" :key="index" class="col-md-3">
                            <div class="image_main">
                                <img :src="formation.image" class="image_8" style="width:200px; height: 200px;">
                                <div class="text_main">
                                <div class="seemore_text">{{ formation.programme }}</div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        </div>
        <div  class="services_section layout_padding">
            <div class="container">
                <h1 id="Conditions-admission" class="services_taital"><span style="color: #005596"> Conditions d'admission</span></h1>
                <center>
                    <div v-for="(condition, index) in conditionArray" :key="index">
                        <span style="font-size: 1.5em;" class="document">{{ index + 1 }}. {{ condition.title }}</span>
                    </div>
                </center>
            </div>
        </div>
        <div id="Dossier-candidature" class="services_section layout_padding">
            <div class="container">
                <h1 class="services_taital"><span style="color: #005596">Dossier de candidateur</span></h1>
                <center>
                    <div class="container-main">
                    <h4><u>Le dossier de candidature doit être déposé en ligne:</u></h4>
                    <br>
                    <ul>
                        <li v-for="(dossier, index) in dossierArray" :key="index">
                            <div class="checkmark">✓</div>
                            <span class="document">{{ index + 1 }}. {{ dossier.documentType }}</span>
                        </li>
                    </ul>
                    <!-- <ul>
                        <li>
                            <div class="checkmark">✓</div>
                            <span class="document">Copie de CIN.</span>
                        </li>
                        <li>
                            <div class="checkmark">✓</div>
                            <span class="document">Copie de baccalauréat (recto et verso).</span>
                        </li>
                        <li>
                            <div class="checkmark">✓</div>
                            <span class="document">Copie de diplôme ou attestation de réussite BAC+2.</span>
                        </li>
                        <li>
                            <div class="checkmark">✓</div>
                            <span class="document">Copie des relevés des notes S1, S2, S3, et S4.</span>
                        </li>
                     </ul> -->
                    <p class="note">N.B: Toute information erronée entraîne l’annulation de la candidature.</p>
            </div>
                </center>
            </div>
        </div>
        <div id="Dates-important" class="services_section layout_padding">
            <div class="container">
                <h1 class="services_taital"><span style="color: #005596">Dates importants</span></h1>
                <table>
                    <tr>
                        <th>Event</th>
                        <th>Date</th>
                    </tr>
                    <tr v-for="(item, index) in dateImportantArray" :key="index">
                        <td>{{ item.event }}</td>
                        <td>{{ item.date }}</td>
                    </tr>
                </table>
                    <!-- <table>
                        <tr>
                            <th>Event</th>
                            <th>Date</th>
                        </tr>
                         <tr>
                            <td>Préinscription en ligne</td>
                            <td>{{ dateImporant.Preinscription }}</td>
                        </tr>
                        <tr>
                            <td>Sélection et étude de dossier</td>
                            <td>{{ dateImporant.Selection }}</td>
                        </tr>
                        <tr>
                            <td>Affichage des résultats de la sélection</td>
                            <td>{{ dateImporant.Aselection }}</td>
                        </tr>
                        <tr>
                            <td>Concours d'admission</td>
                            <td>{{ dateImporant.Concours }}</td>
                        </tr>
                        <tr>
                            <td>Affichage des résultats</td>
                            <td>{{ dateImporant.Aconcours }}</td>
                        </tr>
                </table> -->
            </div>
        </div>
        <br>
        <div class="footer">
            <a class="text-footer">Ecole Supérieure de Technologie Guelmim</a>
        </div>
    </div>
    
</template>
<script>
import { getFirestore, collection, getDocs} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import firebaseApp from '../scripts/firebaseConfig';
const db = getFirestore(firebaseApp);

export default {
    data() {
        return {
            dateImportantArray: [],
            conditionArray: [],
            dossierArray: [],
            formationArray:[],

        };
    },
    // Other Vue component options...

    mounted() {
        this.getDataFromFirestore();
    },

    methods: {
        async getDataFromFirestore() {
            const dateImportantCollection = collection(db, 'dateImporatnt');
            const conditionCollection = collection(db, 'condition');
            const dossierCollection = collection(db, 'Dossier');
            const formationCollection = collection(db,'formation');

            try {
                const querySnapshot = await getDocs(dateImportantCollection);
                const conditionSnapshot = await getDocs(conditionCollection);
                const dossierSnapshot = await getDocs(dossierCollection);
                const formationSnapshot = await getDocs(formationCollection);


                // Transform the data into an array
                this.dateImportantArray = querySnapshot.docs.map(doc => doc.data());
                this.conditionArray = conditionSnapshot.docs.map(doc => doc.data());
                this.dossierArray = dossierSnapshot.docs.map(doc => doc.data());
                this.formationArray = formationSnapshot.docs.map(doc => doc.data());
            } catch (error) {
                alert('Error getting data from Firestore:', error.message);
                // Handle the error as needed
            }
        },
    },
};
</script>
<style>
@import '../assets/global.css';
</style>
