<template>
  <div>
    <h1>Venues</h1>
    <div class="venuesList">
      <div
        class="venue"
        v-for="venue in getVenues"
        :key="venue.id"
        @click="goToFeedbackPage(venue.id)"
      >
        {{ venue.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'VenuesComponent',
  data: () => { return {} },
  methods: {
    goToFeedbackPage(id) {
      this.$router.push({name: 'venue', params: {id}})
    }
  },
  computed: {
    ...mapGetters(['getVenues'])
  },
}
</script>

<style>
.venuesList {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
}

.venue {
  padding: 5px 15px;
  background-color: #ccc;
  border: 3px solid rgb(184, 183, 183);
  border-radius: 5px;
  cursor: pointer;
}
</style>
