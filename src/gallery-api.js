import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getData = async (query, page) => {
    try {
        const response = await axios.get("/search/photos", {
            params: { query, page },
            headers: {
                Authorization: 'Client-ID rlsrnB77KBHxTJ8Uv6HecuRDhpgcWE_T-F0HPvpMStc'
            }

    
        });
        const total_pages = response.data.total_pages;
        const data = response.data.results;
        return { data, total_pages };

    } catch (error) {
        throw new Error("Something went wrong. Please try again later.")
    }
};