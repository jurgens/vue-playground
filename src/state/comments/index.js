import { getComments, addComment } from '@/requests/comments';

const comments = {
  state: () => ({
    comments: [],
    commentToAdd: null,
  }),
  actions: {
    async getCommentsFromServer({ commit }) {
      try {
        const data = await getComments();
        commit("setComments", { comments: data });
      } catch (error) {
        console.error(error)
      }
    },
    async addComment({ commit }, payload) {
      const response = await addComment(payload);
      console.log(response);
      commit("pushNewComment", payload);
    }
  },
  mutations: {
    setComments(state, payload) {
      state.comments = payload.comments;
    },
    setNewComment(state, payload) {
      state.commentToAdd = payload;
    },
    pushNewComment(state, payload) {
      state.comments.push(payload);
    }
  },
  getters: {
    getComments: state => {
      return state.comments
    },
    getCommentsById: (state) => (id) => {
      return state.comments.filter(comment => comment.postId === id)
    },
    getCommentToAdd: state => {
      return state.commentToAdd;
    }
  }
}

export default comments;