import axios from 'axios'
export default {
  async getBeer() {
    const { data } = await axios.get(
      'https://random-data-api.com/api/beer/random_beer'
    )
    return data
  },
}
