<template>
  <div>
    <h1>Preview</h1>
    <div v-if="getCommentToAdd">
      <p>Email: {{ getCommentToAdd.email }}</p>
      <p>Text: {{ getCommentToAdd.body }}</p>
      <p>Rating: {{ getCommentToAdd.rating }}</p>
    </div>
    <button @click="handleAddComment()">Accept</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'PreviewComponent',
  data: () => {
    return {

    }
  },
  methods: {
    ...mapActions(['addComment']),
    goBack() {
      this.$router.push({name: 'gratitude'});
    },
    handleAddComment() {
      this.addComment(this.getCommentToAdd);
      this.goBack();
    }
  },
  computed: {
    ...mapGetters(['getCommentToAdd']),
  },
  mounted() {
    if(!this.getCommentToAdd) {
      this.goBack();
    }
  }
}
</script>
