<template>
    <div class="container">
        <div class="row justify-content-center">
            <div v-for="film in info" :key="film.imdbID">
                <div>
                    <b-card
                            :title="film.Title"
                            :img-src="film.Poster"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 18rem;"
                            class="mb-2 custom-card"
                    >
                        <b-card-text>
                            <hr>
                            <router-link :to="`/details/${film.imdbID}`">Détails</router-link>
                        </b-card-text>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const axios = require('axios').default
    export default {
        name: "Movie",
        data() {
            return {
                info: null,
            }
        },
        mounted () {
            axios
                .get('http://www.omdbapi.com/?s=Pokemon&apikey=a0147541')
                .then(response => (this.info = response.data.Search ))
        },
    }

</script>

<style scoped>
    .custom-card{
        margin-left:5px;
        margin-right:5px;
        margin-top: 10px;
        -webkit-box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.65);
        -moz-box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.65);
        box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.65);
    }
    .container{margin-top: 30px;}

</style>