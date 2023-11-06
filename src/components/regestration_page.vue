<template>
    <div class="full-page">
        <div class="limiter">
            <div>
                <div class="wrap-login100">
                    <img class="logo-img" src="../assets/images/img2.png" alt="Votre image" width="350" height="250" style="padding-top: 0%;">
                    <form class="login100-form validate-form">
                        <span class="login100-form-title p-b-43">Première visite</span>
                        <pre><label class="label-style">Créer un nouveau compte<br><u>CIN: Numéro de la carte d'identité nationale</u><br><br><br></label></pre>
                        <label>CIN</label>
                        <div class="wrap-input100" data-validate="Numéro CIN requis">
                            <input class="input100" type="text" name="cin">
                        </div>
                        <label>Email</label>
                        <div class="wrap-input100" data-validate="Email valide requis: ex@abc.xyz">
                            <input class="input100" type="email" name="email">
                        </div>
                        <label>Mot de passe</label>
                        <div class="wrap-input100" data-validate="Mot de passe requis">
                            <input class="input100" type="password" name="password">
                        </div>
                        <label>Confirmez le mot de passe</label>
                        <div class="wrap-input100" data-validate="Confirmez le mot de passe">
                            <input class="input100" type="password" name="confirm-password">
                        </div>
                        <div class="container-login100-form-btn">
                            <button class="login100-form-btn">Créer un compte</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</template>


<style scoped>
@import '@/assets/styles_login._fonts.css';
@import '@/assets/stayling.css';
@import '@/assets/style.css';

.full-page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #f0f0f0; /* Set the background color you prefer */
    overflow: hidden;
}
</style>