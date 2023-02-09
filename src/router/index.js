import VueRouter from 'vue-router'

import venues from '@/pages/venues/index'
import venue from '@/pages/venues/venue'
import previewWatch from '@/pages/previewWatch/index'
import thankReview from '@/pages/thank/index'

const routes = [
  { path: '/venues', name: 'venues', component: venues },
  { path: '/venues/:id', name: 'venue', component: venue },
  { path: '/previewWatch', name: 'previewWatch', component: previewWatch },
  { path: '/thankyou', name: 'thankReview', component: thankReview },
]
const router = new VueRouter({
  mode: 'history',
  routes
})
export default router