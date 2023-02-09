<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapActions({
      getVenues: 'venue/getVenues'
    })
  },
  async mounted() {
    await this.getVenues()
  }
}
</script>

<style>
</style>
