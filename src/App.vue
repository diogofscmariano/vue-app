<template>
  <div class="app">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Vue App!'
      }
    }
  }
</script>

<style lang="css">
  html,
  body {
    margin: 0;
    padding: 0;
  }

  .root {
    height: 100vh;
    background: lightseagreen;
  }

  .app {
    padding: 10px;
  }
</style>