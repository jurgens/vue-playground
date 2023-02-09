<template>
  <div>
    <h1>Preview watch review</h1>
    <h2>Name: {{getVenue.venueName }}</h2>
    <p>Text: {{getReview.text }}</p>
    <span>Rating: {{getReview.rating }}</span>
    <button @click="saveReview()">Save</button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: "preWatch",
  computed: {
    ...mapGetters({
      getterGetVenue: "venue/getVenue",
      getReview: "review/getReview",
    }),
    getVenue() {
      const venueId = +this.$route.params.id
      return this.getterGetVenue(venueId)
    }
  },
  methods: {
    ...mapActions({
      actionSaveReview: 'review/saveReview'
    }),
    async saveReview() {
      await this.actionSaveReview({ review: this.getReview, venueId: this.getVenue.id })
      this.$router.push({name: "thankReview"})
    }
  },
}
</script>