<template>
  <div>
    <div>
      <h1>Name: {{getVenue.venueName }}</h1>
      <h3>Id venue: {{ getVenue.id }}</h3>
    </div>
    <listReview :review="getVenue.review" v-if="getVenue.review" />
    <formReview :venueId="getVenue.id" />
  </div>
</template>
<script>
import { mapGetters } from "vuex"
import formReview from "@/components/forms/formReview.vue"
import listReview from "@/components/lists/listReview.vue"
export default {
  name: "venuePage",
  components: { formReview, listReview },
  computed: {
    ...mapGetters({
      getterGetVenue: "venue/getVenue"
    }),
    getVenue() {
      const venueId = +this.$route.params.id
      return this.getterGetVenue(venueId)
    }
  },
}
</script>