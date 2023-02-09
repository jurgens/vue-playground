import { apiSaveReview } from "@/services/review"
import * as venues from "@/store/venue"

const state = {
  review: {},
}
const actions = {
  async saveReview({commit}, { review, venueId }) {
    const response = await apiSaveReview(review)
    commit("saveReview", { review: response, venueId })
  }
}
const mutations = {
  setReview(state, review) {
    state.review = review
  },
  saveReview(state, {review, venueId}) {
    const venuesList = venues.default.state.venues
    const venue = venuesList.find((venue) => venue.id === venueId)
    const venueReview = venue.review ? venue.review : [];
    venue.review = [ ...venueReview, { ...review }]
  }
}
const getters = {
  getReview(state) {
    return state.review
  },
}
export default {
  namespaced: true, state, actions, mutations, getters,
};