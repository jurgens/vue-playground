<template>
  <div>
    <h2>Form for create review</h2>
    <form @submit.prevent="createReview()">
      <input placeholder="text" type="text" v-model="text">
      <div>
          Rating:
          <label v-for="(item, index) of 5" :key="index">
              <input type="radio" name="radio" :value="index + 1" v-model="rating">
            {{index + 1}}
          </label>
      </div>
      <button type="submit">Create</button>
    </form>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  props: {
    venueId: {
      type: Number,
      require: true
    }
  },
  data() {
    return {
      text: "",
      rating: 0,
    }
  },
  methods: {
    ...mapMutations({
      setReview: "review/setReview",
    }),
    createReview() {
      this.setReview({ text: this.text, rating: this.rating })
      this.$router.push({name: "previewWatch", params: { id: this.venueId}})
    }
  }
}
</script>
