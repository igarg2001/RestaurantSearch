import axios from 'axios'
import { api_key } from '../../config'

export default axios.create({
    baseURL:  'https://developers.zomato.com/api/v2.1',
    headers: {
        'user-key': api_key
    }
})