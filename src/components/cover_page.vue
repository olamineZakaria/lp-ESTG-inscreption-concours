<template>
    <div class="full-page">
        <div class="navbar">
            <div class="navbar-title">LP-ESTG</div>
            <!-- <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a> -->
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
                </div>
            </div>
        </div>
        <div class="services_section layout_padding">
            <div class="container">
                <h1 class="services_taital"><span style="color: #005596">Our</span> Courses</h1>
                <div class="services_section_2">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="image_main">
                                <img src="../assets/images/img-2.png" class="image_8" style="width:100%">
                                <div class="text_main">
                                    <div class="seemore_text">Art And Design</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="image_main">
                                <img src="../assets/images/img-3.png" class="image_8" style="width:100%">
                                <div class="text_main">
                                    <div class="seemore_text">Science</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="image_main">
                                <img src="../assets/images/img-4.png" class="image_8" style="width:100%">
                                <div class="text_main">
                                    <div class="seemore_text">Business Study</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="image_main">
                                <img src="../assets/images/img-5.png" class="image_8" style="width:100%">
                                <div class="text_main">
                                    <div class="seemore_text">English Speaking</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script></script>

<style scoped>
@import '../assets/global.css';
.full-page {
    overflow: auto; /* Enable scrolling for the entire page */
    height: 100vh; /* Set the page height to the viewport height */
}

.col-md-3 {
    width: 25%; /* Divide the row into four equal-width columns */
    float: left; /* Display the columns next to each other */
    box-sizing: border-box; /* Include padding and border in the width */
    padding: 10px;
}
</style>
