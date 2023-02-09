<template>
  <div>
    <h1>List restorants</h1>
      <ul>
        <li v-for="venue of getVenues" :key="venue.id">
          <router-link :to="{name: 'venue', params: {id: venue.id}}">{{ venue.venueName }}</router-link>
        </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: "venuesPage",
    computed: {
        ...mapGetters({
            getVenues: 'venue/getVenues',
        })
    },
}
</script>
<style lang="scss" scoped>

</style>