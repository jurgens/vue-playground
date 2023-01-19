<template>
  <div>

    <div class="comments">
      <h3 class="comments__title">Comments: </h3>
      <div class="comments__body">
        <div class="comments__comment" v-for="comment in getCurrentComments" :key="comment.id">
          <p>
            <b>Author:</b> {{ comment.email }}
          </p>
          <div>
            <b>Text:</b> {{ comment.body }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'CommentsComponent',
  props: {
    id: {
      type: Number,
    }
  },
  data: () => {
    return {
    }
  },
  methods: {
  },
  computed: {
    ...mapGetters(['getCommentsById']),
    getCurrentComments() {
      return this.getCommentsById(this.id)
    }
  }
}
</script>

<style>
.comments {
}

.comments__body {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
}

.comments__title {}

.comments__comment {
  padding: 5px 15px;
  background-color: #ccc;
  border: 3px solid rgb(184, 183, 183);
  border-radius: 5px;
}
</style>
