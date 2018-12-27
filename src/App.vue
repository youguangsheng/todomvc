<template>
  <div id="app">
    <div class="cover"></div>
    <app-header/>
    <app-todo/>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from './components/Header.vue'
import AppFooter from './components/Footer.vue'
import AppTodo from './components/todo.vue'
export default {
  name: "app",
  components: {
    AppHeader,
    AppTodo,
    AppFooter
  }
};
</script>

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
}
</style>
