<template>
<div class="full-page">
    <div class="limiter">
    <div>
        <div class="wrap-login100">
            <img class="logo-img" src="../assets/images/img2.png" alt="Votre image" width="350" height="250" style="padding-top: 0%;">
            <form class="login100-form validate-form">
                <span class="login100-form-title p-b-43">Réinitialiser le mot de passe</span>
                <pre><label class="label-style"><u>* le mot de passe sera réinitialisé et envoyé à votre <br> e-mail que vous avez fourni lors de la création du compte.</u><br><br><br></label></pre>

                <label>CIN</label>
                <div class="wrap-input100" data-validate="Numéro CIN requis">
                    <input class="input100" type="text" name="cin">
                </div>
                <label>Email</label>
                <div class="wrap-input100" data-validate="Email valide requis: ex@abc.xyz">
                    <input class="input100" type="email" name="email">
                </div>
                <div class="container-login100-form-btn">
                    <button class="login100-form-btn">Réinitialiser</button>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
</template>
<script>
</script>
<style scoped>
@import '@/assets/styles_login._fonts.css';
@import '@/assets/stayling.css';
</style>