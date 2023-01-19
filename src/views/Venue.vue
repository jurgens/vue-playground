<template>
  <div>
    <h1>{{ getCurrentVenue.name }}</h1>
    <p>
      <b>Description: </b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ex!
    </p>

    <AddComment :id="getIdFromParams"/>

    <div class="comments">
      <Comments :id="getIdFromParams"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Comments from '@/components/CommentsList.vue';
import AddComment from '@/components/AddCommentForm.vue';

export default {
  name: 'VenueComponent',
  components: { Comments, AddComment },
  data: () => {
    return {
      // comments: null,
    }
  },
  methods: {
    ...mapActions(['getCommentsFromServer']),
  },
  computed: {
    ...mapGetters(['getVenueById']),

    getIdFromParams() {
      return Number(this.$route.params.id);
    },
    getCurrentVenue() {
      return this.getVenueById(this.getIdFromParams)
    }
  },
  // async mounted() {
  //   await this.getCommentsFromServer();
  // }
}
</script>
