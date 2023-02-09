import api from "@/services/api"

export async function apiSaveReview(review) {
  try {
    const response = await api.post('/venues.json', review)
    return response.data.venues
  } catch(error) {
    console.error(error)
    // Емуляція успішно спрацьованого запиту
    return review
  }
}