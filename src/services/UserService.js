import axios from 'axios'

export default class UserService {
    constructor() {
        this.baseURL = 'http://localhost:5000/'
    }

    async login(username, password) {
        const response = await axios.post(
            `${this.baseURL}login/${username}/${password}`
        )
        return response.data
    }


}
