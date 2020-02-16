<template>
    <div class="detail">
        <img alt="Vue logo" width="250" src="../assets/logo2.png">
        <div>
            <h1>Détails</h1>
        </div>
        <hr>
        <h2>{{ $route.params.id }}</h2>

    </div>
</template>

<script>
    export default {
        name: "Detail"
    }
</script>

<style scoped>

    .detail{ margin-top: 100px; }

    h1{ color: black; margin-top: 20px;}

    hr{ width: 50%;}

</style>