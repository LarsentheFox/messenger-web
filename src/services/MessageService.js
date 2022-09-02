import axios from 'axios'

export default class MessageService {
    constructor() {
        this.baseURL = 'http://localhost:5000/'
    }

    async create_message() {
        const response = await axios.get(
            `${this.baseURL}message`
        )
        return response.data
    }


}

