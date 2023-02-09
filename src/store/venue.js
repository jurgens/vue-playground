import { apiGetVenues } from "@/services/venues"

const state = {
  // Якщо закінчились запити до API розкоментуйте 5 строку, та закоментуйте 6 строку. Перейдіть в файл App.vue і закоментуйте 8, 12-14 строку.
  // venues: [{"id":1,"venueName":"Ursus maritimus"},{"id":2,"venueName":"Numida meleagris"},{"id":3,"venueName":"Bucorvus leadbeateri"},{"id":4,"venueName":"Melursus ursinus"},{"id":5,"venueName":"Mycteria leucocephala"},{"id":6,"venueName":"Haliaeetus leucoryphus"},{"id":7,"venueName":"Manouria emys"},{"id":8,"venueName":"Canis lupus baileyi"},{"id":9,"venueName":"Laniaurius atrococcineus"},{"id":10,"venueName":"Grus antigone"}],
  venues: [],
}
const actions = {
  async getVenues({commit}) {
    const response = await apiGetVenues()
    commit("setVenuesList", response)
  },
}
const mutations = {
  setVenuesList(state, venues) {
    state.venues = venues
  },
}
const getters = {
  getVenues(state) {
    return state.venues
  },
  getVenue: (state) => (id) => {
    return state.venues.find((venue) => venue.id === id)
  },
}
export default {
  namespaced: true, state, actions, mutations, getters,
};