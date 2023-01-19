import Vuex from 'vuex'
import Vue from 'vue'

import venues from '@/state/venues'
import comments from '@/state/comments'

Vue.use(Vuex)
 
 const store = new Vuex.Store({
  modules: {
    venues,
    comments
  }
})

export default store