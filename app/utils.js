import axios from "axios";

export async function LoadData(URL) {
    const response = await axios.get(URL);
    return response.data;
}