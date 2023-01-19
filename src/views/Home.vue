<template>
  <div class="hello">
    <h1>
      HOME PAGE
    </h1>
    <button @click="goToVenues()">Open venues list</button>
    <!-- this.$router.push({name: 'venue', params: {id}}) -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => {return {}},
  methods: {
    goToVenues() {
      this.$router.push({name: 'venues'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

button {
  padding: 5px 15px;
  background: rgba(66, 185, 131, 0.7);
  border: 3px solid rgba(56, 155, 110, 0.7);
  border-radius: 5px;
  cursor: pointer;
}
</style>
