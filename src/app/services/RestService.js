class RestService {
  async get(url) {
    const response = await fetch(url)
    return await response.json()
  }
}

export const restService = new RestService()
