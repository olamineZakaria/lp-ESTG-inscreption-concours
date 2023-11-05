<template>
    <div class="full-page">
      <div id="container">
        <div id="row">
          <div id="padd-box">
            <router-link to="/regestration" class="style-noodels-Fourteen blue">
              <img src="../assets/images/Guelmim_04.jpg" alt="Image 1">
              <div class="icons">
                <p>Créer un nouveau compte</p>
              </div>
              <h3><span>Première visite</span></h3>
            </router-link>
          </div>
          <div class="col-md-6" style="padding: 0px;">
            <router-link to="/login" class="style-noodels-Fourteen green">
              <img src="../assets/images/Guelmim_03.jpg" alt="Image 2">
              <figcaption>
                <div class="icons">
                  <p>Je me connecte</p>
                </div>
                <h3>Accéder à <span>votre compte</span></h3>
              </figcaption>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'welcome_page',
  }
  </script>
  <style>
  @import '@/assets/style.css';
  </style>
    