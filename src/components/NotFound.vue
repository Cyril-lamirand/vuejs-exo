<template>
    <div class="notfound">
        <img alt="Vue logo" width="250" src="../assets/logo2.png">
        <hr>
        <h1>This view doesn't exist !</h1>
        <p><router-link to="/">Retour à l'index du site</router-link></p>
    </div>
</template>

<script>
    export default {
        name: "NotFound"
    }
</script>

<style scoped>
    .notfound { margin-top:80px; }
    hr{ width: 50%; }
</style>