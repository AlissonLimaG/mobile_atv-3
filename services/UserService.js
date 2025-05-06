import axios from "axios"
import enviroments from "../enviroments";

export default UserService = {

    findById: async (id) => {
        const response = await axios.get(enviroments.API_URL + "user/" + id).then(res => res.data);
        console.log(response)
        return response;
    }
}