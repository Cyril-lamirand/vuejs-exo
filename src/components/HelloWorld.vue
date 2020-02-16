<template>
    <div class="hello">
        <img alt="Vue logo" width="350" src="../assets/logo.png">
        <h1>cyril lamirand - a2dw3</h1>
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
    h1{
        margin-top:30px;
        text-transform:uppercase;
        background: -webkit-linear-gradient(360deg, #09009f, #00ff95 90%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>
