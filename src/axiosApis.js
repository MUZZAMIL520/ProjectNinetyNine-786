import axios from 'axios'
export default axios.create(
    {
        baseURL:"https://nintynin-96f20.firebaseio.com/"
    }
)