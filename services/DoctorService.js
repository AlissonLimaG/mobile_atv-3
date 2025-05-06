import axios from "axios"
import enviroments from "../enviroments";

export default DoctorService = {

    findAll: async () => {
        const response = await axios.get(enviroments.API_URL + "doctors").then(res => res.data);
        return response;
    }
}