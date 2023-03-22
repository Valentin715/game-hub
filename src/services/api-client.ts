import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "1a58e39f428641b285f4a348e6d9b8d7"
    }
})