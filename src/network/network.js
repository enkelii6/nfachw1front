import axios from 'axios'
const base_url = "https://nfachw1back.onrender.com/api/"

export const getAPI = async (section) => {
    const response = await axios.get(base_url + section)
    return response.data
}

export default getAPI