import Vue from 'vue'
import Vuex from 'vuex'
import review from "@/store/review"
import venue from "@/store/venue"
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    review,
    venue,
  },
})

export default store;
