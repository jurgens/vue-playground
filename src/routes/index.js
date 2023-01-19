import Home from '@/views/Home'
import SurveyComponent from '@/components/Survey'
import VenuesComponent from '@/views/Venues'
import PreviewComponent from '@/views/Preview'
import VenueComponent from '@/views/Venue'
import ThankYouPage from '@/views/ThankYouPage'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/survey', name: 'survey', component: SurveyComponent },
  { path: '/venues', name: 'venues', component: VenuesComponent },
  { path: '/venues/:id', name: 'venue', component: VenueComponent },
  { path: '/preview', name: 'preview', component: PreviewComponent },
  { path: '/gratitude', name: 'gratitude', component: ThankYouPage },
]

export default routes