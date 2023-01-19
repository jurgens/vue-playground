const venues = {
  state: () => ({
    venues: [
      { 
        id: 1,
        name: 'Kompot'
      },
      {
        id: 2,
        name: 'Steakhouse'
      }
    ]
  }),
  getters: {
    getVenues: state => {
      return state.venues
    },
    getVenueById: (state) => (id) => {
      return state.venues.find(venue => venue.id === id)
    }
  }
}

export default venues;