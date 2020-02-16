<template>
    <div class="container-fluid">
        <div class="row navbar-custom">
            <div class="col-6 navbar-left">
                <h2><router-link to="/movie">Films</router-link></h2>
            </div>
            <div class="col-6 navbar-right">
                <h2><router-link to="/">Favoris</router-link></h2>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

    .navbar-custom{
        height: 70px;
        border-bottom: 2px solid white;
        -webkit-box-shadow: 0px 4px 5px -2px rgba(0,0,0,0.34);
        -moz-box-shadow: 0px 4px 5px -2px rgba(0,0,0,0.34);
        box-shadow: 0px 4px 5px -2px rgba(0,0,0,0.34);
    }
    .navbar-right, .navbar-left{ height: 100%; padding-top: 13px; }
    .navbar-right{ background: #41b883;}
    .navbar-left{ background: #35495e;}

    a{
        color: white;
        text-decoration: none;
        text-shadow: 1px 1px 3px black;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    a:hover{
        color: #cc94d4;
        text-decoration: none;
    }

</style>