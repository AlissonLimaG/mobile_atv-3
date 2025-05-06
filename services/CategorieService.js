import axios from "axios"
import enviroments from "../enviroments";

export default CategorieService = {

    findAll: async () => {
        const response = await axios.get(enviroments.API_URL + "categories").then(res => res.data);
        return response;
    }
}