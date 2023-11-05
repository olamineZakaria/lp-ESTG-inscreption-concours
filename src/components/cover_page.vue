<template>
    <div class="full-page">
        <div class="navbar">
            <div class="navbar-title">LP-ESTG</div>
        </div>
        <div class="banner-slide">
            <div class="banner-overlay">
                <div class="banner-content">
                    <h1>Ecole Supérieure de Technologie Guelmim</h1>
                    <p>Concours Licence Professionnelle</p>
                    <p><u>Annee universitaire 2023-2024</u></p>
                    <br>
                    <br>
                    <a href="#" class="button">Inscription</a>
                    <br>
                    <a href="#" class="button">Inscription</a>
                </div>
            </div>
        </div>
        <div class="services_section layout_padding">
            <div class="container">
                <h1 class="services_taital"><span style="color: #005596">Les</span> Formations</h1>
                <div class="services_section_2">
                    <center>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="image_main">
                                    <img src="../assets/images/pexels-lukas-669616.jpg" class="image_8" style="width:100%; height: 200px;">
                                    <div class="text_main">
                                        <div class="seemore_text">Informatique Décisionnelle et Statistiques (IDS)</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="image_main">
                                    <img src="../assets/images/img-3.png" class="image_8" style="width:100%; height: 200px;">
                                    <div class = "text_main">
                                        <div class="seemore_text">Instrumentation & Systèmes (IS)</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="image_main">
                                    <img src="../assets/images/pexels-pixabay-159397.jpg" class="image_8" style="width:100%; height: 200px;">
                                    <div class="text_main">
                                        <div class="seemore_text">Energies Renouvelables et Procédés (ERP)</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="image_main">
                                    <img src="../assets/images/pexels-lukas-669614.jpg" class="image_8" style="width:100%; height: 200px;">
                                    <div class="text_main">
                                        <div class="seemore_text">Informatique Décisionnelle et Statistiques (IDS) ASSa</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '../assets/global.css';

.full-page {
    overflow: auto;
    height: 100vh;
}

.row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.col-md-3 {
    width: calc(50% - 20px);
    box-sizing: border-box;
    padding: 10px;
    margin: 10px;
}
</style>
