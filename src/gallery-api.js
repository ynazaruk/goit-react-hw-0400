import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getData = async (query, page) => {
    try {
        const response = await axios.get("/search/photos", {
            params: { query, page },
            headers: {
                Authorization: "Client-ID rlsrnB77KBHxTJ8Uv6HecuRDhpgcWE_T-F0HPvpMStc"
            }

    
        });
        return response.data.results;
    

    } catch (error) {
        throw new Error("Something went wrong. Please try again later.")
    }
};