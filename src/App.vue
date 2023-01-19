<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: 'App',
  methods: {
    ...mapActions(['getCommentsFromServer'])
  },
  //получение коментов расположено тут из за отсутствия сохранения нового комента на беке - что бы коменты не перезатирались
  async created() {
    await this.getCommentsFromServer();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 20px;
}
</style>
