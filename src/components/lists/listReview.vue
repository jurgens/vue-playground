<template>
  <div>
    <h2>List review</h2>
    <ul>
      <li v-for="(review, index) of review" :key="index">
        <span>{{review.text}}</span>
        <span>{{review.rating}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    review: {
      type: Array,
      require: true
    }
  }
}
</script>
