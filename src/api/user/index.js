import axios from 'axios'
export default {
  async getUser() {
    const { data } = await axios.get(
      ' https://random-data-api.com/api/users/random_user'
    )
    return data
  },
}