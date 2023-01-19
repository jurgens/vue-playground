<template>
  <div class="hello">
    <h1>
      Thank you!
    </h1>
    <button @click="goToVenues()">Back to venues list</button>
    <!-- this.$router.push({name: 'venue', params: {id}}) -->
  </div>
</template>

<script>
export default {
  name: 'ThankYouPage',
  data: () => {return {}},
  methods: {
    goToVenues() {
      this.$router.push({name: 'venues'})
    }
  }
}
</script>
