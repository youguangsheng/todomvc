<template>
  <div id="app">
<<<<<<< HEAD
    <div class="cover"></div>
    <app-header/>
    <app-todo/>
    <app-footer/>
=======
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
>>>>>>> init
  </div>
</template>

<script>
<<<<<<< HEAD
import AppHeader from './components/Header.vue'
import AppFooter from './components/Footer.vue'
import AppTodo from './components/todo.vue'
export default {
  name: "app",
  components: {
    AppHeader,
    AppTodo,
    AppFooter
=======
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
>>>>>>> init
  }
};
</script>

<<<<<<< HEAD
<style lang="scss" scoped>
#app {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.cover {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #555;
  opacity: 0.5;
  z-index: -1; 
=======
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
>>>>>>> init
}
</style>
