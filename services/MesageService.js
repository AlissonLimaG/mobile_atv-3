import axios from "axios"
import enviroments from "../enviroments";

export default MesageService = {

    findAll: async () => {
        const response = await axios.get(enviroments.API_URL + "mesages").then(res => res.data);
        return response;
    }
}