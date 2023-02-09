import api from "@/services/api"

export async function apiGetVenues() {
  try {
    const response = await api.get('/venues.json')
    return response.data.venues
  } catch(error) {
    console.error(error)
  }
}