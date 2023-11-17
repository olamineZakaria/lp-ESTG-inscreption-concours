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
                  <label for="email">CIN:</label>
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
              <option value="3">+351</option>
              <option value="4">+93</option>
              <option value="5">+27</option>
              <option value="6">+355</option>
              <option value="7">+213</option>
              <option value="8">+49</option>
              <option value="9">+376</option>
              <option value="10">+244</option>
              <option value="11">+1-268</option>
              <option value="12">+966</option>
              <option value="13">+54</option>
              <option value="14">+374</option>
              <option value="15">+61</option>
              <option value="16">+43</option>
              <option value="17">+994</option>
              <option value="18">+1-242</option>
              <option value="19">+973</option>
              <option value="21">+1-246</option>
              <option value="22">+32</option>
              <option value="23">+501</option>
              <option value="24">+229</option>
              <option value="27">+591</option>
              <option value="28">+387</option>
              <option value="30">+55</option>
              <option value="31">+673</option>
              <option value="32">+359</option>
              <option value="33">+226</option>
              <option value="34">+257</option>
              <option value="35">+855</option>
              <option value="36">+237</option>
              <option value="40">+56</option>
              <option value="41">+86</option>
              <option value="42">+357</option>
              <option value="43">+57</option>
              <option value="44">+269</option>
              <option value="46">+242</option>
              <option value="47">+850</option>
              <option value="48">+82</option>
              <option value="49">+506</option>
              <option value="50">+225</option>
              <option value="51">+385</option>
              <option value="52">+53</option>
              <option value="53">+45</option>
              <option value="54">+253</option>
              <option value="55">+1-809</option>
              <option value="56">+1-767</option>
              <option value="57">+20</option>
              <option value="58">+971</option>
              <option value="59">+593</option>
              <option value="60">+291</option>
              <option value="61">+34</option>
              <option value="62">+372</option>
              <option value="63">+1</option>
              <option value="64">+251</option>
              <option value="66">+358</option>
              <option value="210">+33</option>
              <option value="67">+241</option>
              <option value="69">+995</option>
              <option value="70">+233</option>
              <option value="71">+350</option>
              <option value="73">+1-473</option>
              <option value="74">+502</option>
              <option value="75">+224</option>
              <option value="76">+240</option>
              <option value="77">+245</option>
              <option value="79">+509</option>
              <option value="80">+504</option>
              <option value="81">+36</option>
              <option value="82">+91</option>
              <option value="83">+62</option>
              <option value="84">+964</option>
              <option value="85">+98</option>
              <option value="86">+353</option>
              <option value="87">+354</option>
              <option value="90">+1-876</option>
              <option value="91">+81</option>
              <option value="92">+962</option>
              <option value="93">+7</option>
              <option value="94">+254</option>
              <option value="95">+996</option>
              <option value="97">+965</option>
              <option value="98">+856</option>
              <option value="100">+371</option>
              <option value="101">+961</option>
              <option value="103">+218</option>
              <option value="104">+423</option>
              <option value="105">+370</option>
              <option value="106">+352</option>
              <option value="107">+389</option>
              <option value="108">+261</option>
              <option value="109">+60</option>
              <option value="112">+223</option>
              <option value="113">+356</option>
              <option value="114">+212</option>
              <option value="1">+212</option>
              <option value="116">+230</option>
              <option value="117">+222</option>
              <option value="118">+52</option>
              <option value="121">+377</option>
              <option value="122">+976</option>
              <option value="127">+977</option>
              <option value="128">+505</option>
              <option value="129">+227</option>
              <option value="130">+234</option>
              <option value="131">+47</option>
              <option value="132">+687</option>
              <option value="133">+64</option>
              <option value="135">+256</option>
              <option value="136">+998</option>
              <option value="137">+92</option>
              <option value="139">+970</option>
              <option value="140">+507</option>
              <option value="141">+675</option>
              <option value="142">+595</option>
              <option value="144">+51</option>
              <option value="145">+63</option>
              <option value="146">+48</option>
              <option value="147">+689</option>
              <option value="148">+1-787</option>
              <option value="149">+351</option>
              <option value="150">+974</option>
              <option value="151">+40</option>
              <option value="152">+44</option>
              <option value="154">+250</option>
              <option value="156">+1-869</option>
              <option value="157">+1-758</option>
              <option value="158">+378</option>
              <option value="159">+1-784</option>
              <option value="162">+685</option>
              <option value="164">+221</option>
              <option value="166">+248</option>
              <option value="168">+65</option>
              <option value="169">+421</option>
              <option value="170">+386</option>
              <option value="171">+252</option>
              <option value="172">+249</option>
              <option value="173">+94</option>
              <option value="174">+46</option>
              <option value="175">+41</option>
              <option value="178">+963</option>
              <option value="179">+992</option>
              <option value="180">+886</option>
              <option value="181">+255</option>
              <option value="182">+235</option>
              <option value="184">+66</option>
              <option value="186">+228</option>
              <option value="188">+1-868</option>
              <option value="189">+216</option>
              <option value="190">+993</option>
              <option value="191">+90</option>
              <option value="193">+380</option>
              <option value="194">+598</option>
              <option value="196">+39</option>
              <option value="197">+58</option>
              <option value="198">+84</option>
              <option value="199">+681</option>
              <option value="200">+967</option>
              <option value="201">+260</option>
              <option value="202">+263</option>

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
/* Bootstrap grid system */
.col-12 {
  width: 100%;
  float: left;
}

.col-3 {
  width: 25%;
  float: left;
}

.col-9 {
  width: 75%;
  float: left;
}

/* Clearfix to clear floats */
/* Add this if needed to prevent layout issues due to floated elements */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Custom styles */
label {
  display: block; /* Make labels block-level for better spacing */
  margin-bottom: 5px;
}

select,
input {
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  border-radius: 6px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Optional: Style the select dropdown arrow */
select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 30px; /* Adjust as needed */
  background: url('data:image/svg+xml;utf8,<svg fill="black" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 10l5 5 5-5z" fill="black"/></svg>') no-repeat right center;
}


/* Add additional styling as needed */

/* CSS */
.button-65 {
  appearance: none;
  backface-visibility: hidden;
  background-color: #005596;
  border-radius: 10px;
  border-style: none;
  box-shadow: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: Inter,-apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif;
  font-size: 15px;
  font-weight: 500;
  height: 50px;
  letter-spacing: normal;
  line-height: 1.5;
  outline: none;
  overflow: hidden;
  padding: 14px 30px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transform: translate3d(0, 0, 0);
  transition: all .3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin: auto;
  display: block;
  white-space: nowrap;
}

.button-65:hover {
  background-color: #005596;
  box-shadow: rgba(0, 0, 0, .05) 0 5px 30px, rgba(0, 0, 0, .05) 0 1px 4px;
  opacity: 1;
  transform: translateY(0);
  transition-duration: .35s;
}

.button-65:hover:after {
  opacity: .5;
}

.button-65:active {
  box-shadow: rgba(0, 0, 0, .1) 0 3px 6px 0, rgba(0, 0, 0, .1) 0 0 10px 0, rgba(0, 0, 0, .1) 0 1px 4px -1px;
  transform: translateY(2px);
  transition-duration: .35s;
}

.button-65:active:after {
  opacity: 1;
}

@media (min-width: 768px) {
  .button-65 {
    padding: 14px 22px;
    width: 176px;
  }
}
</style>
