import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "0e33b2d841964509aa3aa41c8839a189",
    }
});

export interface FetchResponse<T> {
    count: number;
    results: T[];
}