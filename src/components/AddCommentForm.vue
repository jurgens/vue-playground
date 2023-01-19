<template>
  <div class="addComment">
    <div :class="{error: !isEmailValid && emailWasFocused}">
      <input
        type="email"
        placeholder="type your email"
        v-model="email"
        @blur="emailWasFocused = true"
      >
      <span class="errorMessage">Email is invalid</span>
    </div>
    <div :class="{error: !isCommentTextValid && commentTextWasFocused}">
      <textarea @blur="commentTextWasFocused = true" placeholder="type your comment" v-model="comment"></textarea>
      <span class="errorMessage">Comment text is invalid</span>
    </div>
    <div class="marks">
      <p>Your mark: </p>
      <span v-for="option in getRatingOptions" :key="option" class="mark">
        {{ option }}*
        <input
          name="rating"
          type="radio"
          :value="option"
          v-model="rating"
        >
      </span>
    </div>
    <button @click="addComment()">add comment</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: 'AddCommentForm',
  props: {
    id: {
      type: Number,
    }
  },
  data: () => {
    return {
      email: '',
      emailWasFocused: false,
      comment: '',
      commentTextWasFocused: false,
      rating: null,
      ratingOptionsQuantity: 5,
    }
  },
  methods: {
    addComment() {
      if (this.isEmailValid && this.isCommentTextValid && this.rating) {
        this.setNewComment({email: this.email, body: this.comment, rating: this.rating, postId: this.id});
        this.$router.push({name: 'preview'});
      } else {
        alert('Form validationError');
      }
    },
    ...mapMutations(['setNewComment']),
  },
  computed: {
    getRatingOptions() {
      return Array.from({length: this.ratingOptionsQuantity}, (_, i) => i + 1)
    },
    isEmailValid() {
      const regex = new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
      return regex.test(this.email);
    },
    isCommentTextValid() {
      return this.comment.length > 10;
    }
  }
}
</script>

<style>
.errorMessage {
  display: none;
  color: tomato;
}

.error .errorMessage {
  display: block;
}

.marks {
  margin-bottom: 20px;
}

.mark {
  padding: 5px;
  background-color: #ccc;
  border-radius: 5px;
  margin-right: 5px;
}

input[type=email], textarea {
  width: 50%;
  margin-top: 10px;
  padding: 5px;
  border: 3px solid #ccc;
  border-radius: 5px;
  resize: unset;
}
</style>
