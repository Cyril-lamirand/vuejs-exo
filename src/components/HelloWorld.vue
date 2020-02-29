<template>
    <div class="container">
        <div class="hello">
            <img alt="Vue logo" width="350" src="../assets/logo.png">
            <h1>cyril lamirand - a2dw3</h1>
        </div>
        <hr>
        <div class="row">
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <h2>Environnement</h2>
                <hr>
                <h5 class="ta-left">I.D.E</h5>
                <ul>
                    <li class="ta-left">IntelliJ IDEA Ultimate =D</li>
                </ul>
                <h5 class="ta-left">O.S</h5>
                <ul>
                    <li class="ta-left">Windows 10 Professionnal</li>
                    <li class="ta-left">Ubuntu 18.04 LTS</li>
                </ul>
                <h5 class="ta-left">Wampserver 64</h5>
                <ul>
                    <li class="ta-left">PHP 7.4.2</li>
                    <li class="ta-left">MySQL 8.0.16</li>
                    <li class="ta-left">Apache 2.4</li>
                </ul>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <h2>Composition du projet</h2>
                <hr>
                <h5 class="ta-left">Plug-in(s)</h5>
                <ul>
                    <li class="ta-left">Bootstrap-vue</li>
                    <li class="ta-left">Router-vue</li>
                    <li class="ta-left">Axios</li>
                </ul>
                <h5 class="ta-left">Component(s)</h5>
                <ul>
                    <li class="ta-left">Detail</li>
                    <li class="ta-left">HelloWorld</li>
                    <li class="ta-left">Movie</li>
                    <li class="ta-left">Navbar</li>
                    <li class="ta-left">NotFound</li>
                </ul>


            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <h2>Information(s)</h2>
                <hr>
                <h5 class="ta-left">Route(s)</h5>
                <ul>
                    <li class="ta-left">/</li>
                    <li class="ta-left">/movie</li>
                    <li class="ta-left">/details/id</li>
                </ul>
                <h5 class="ta-left">To Do</h5>
                <ul>
                    <li class="ta-left">Système de Favoris</li>
                    <li class="ta-left">Vue "Détail" plus "propre".</li>

                </ul>
                <h5 class="ta-left">Optionnel</h5>
                <ul>
                    <li class="ta-left">Base de données</li>
                </ul>


            </div>
        </div>
        <hr>
    </div>

</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>

<style scoped>

    .hello{
        margin-top: 30px;
    }
    .ta-left{ text-align: left;}
    h1{
        margin-top:30px;
        text-transform:uppercase;
        background: -webkit-linear-gradient(360deg, #09009f, #00ff95 90%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>
