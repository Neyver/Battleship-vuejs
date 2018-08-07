<template>
  <div id="app">
    <router-view/>
    <Battleship/>
    <Menu/>
  </div>
</template>

<script>
  import Battleship from './components/Battleship.vue';
  import Menu from './components/Menu.vue';
export default {
  name: 'App',
  components: {
      Battleship,
      Menu      
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
