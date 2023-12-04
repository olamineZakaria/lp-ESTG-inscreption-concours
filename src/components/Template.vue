<!-- src/components/Template.vue -->

<template>
  <div class="full-page">
    <div class="body">
      <header class="clearfix">
        <div id="logo">
          <img src="../assets/images/img2.png" alt="Logo">
        </div>
        <h1>CANDIDATURE EST-Guelim ANNÉE UNIVERSITAIRE : 2023/2024</h1>
        <div id="project">
          <div><span>Nom </span> Website development</div>
          <div><span>Prenom </span> John Doe</div>
          <div><span>Email </span> <a :href="'mailto:' + email">john@example.com</a></div>
          <div><span>CIN </span> August 17, 2015</div>
          <div><span>CNE </span> September 17, 2015</div>
        </div>
      </header>
      <main>
      </main>
      <footer>Copyright © 2023 tous droits réservés par École Supérieure de Technologie Guelmim</footer>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: 'john@example.com',
        inscreptionList: ['Inscreption list', 'Inscreption list', 'Inscreption list'],
        notice: 'Guelmim , le 22/11/2023 11:28',
      };
    },
  };
  </script>
  
  <style >
  .clearfix:after {
    content: "";
    display: table;
    clear: both;
  }
  
  a {
    color: #5D6975;
    text-decoration: underline;
  }
  .clearfix:after {
  content: "";
  display: table;
  clear: both;
}
span{
  font-size: large;
  margin-left: 5%;
}
a {
  color: #5D6975;
  text-decoration: underline;
}
.full-page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #FFFFFF; /* Set the background color you prefer */
  }

.body {
  position: relative;
  width: 21cm;  
  height: 29.7cm; 
  margin: 0 auto; 
  color: #001028;
  background: #FFFFFF; 
  font-family: Arial, sans-serif; 
  font-size: 12px; 
  font-family: Arial;
}


#logo {
  text-align: center;
  margin-bottom: 10px;
}

#logo img {
  width: 290px;
}

h1 {
  border-top: 1px solid  #5D6975;
  border-bottom: 1px solid  #5D6975;
  color: #5D6975;
  font-size: 2.4em;
  line-height: 1.4em;
  font-weight: normal;
  text-align: center;
  margin: 0 0 20px 0;
  background: url(dimension.png);
}

footer {
  color: #5D6975;
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #C1CED9;
  padding: 8px 0;
  text-align: center;
}
  /* Add other styles as needed */
  </style>
  