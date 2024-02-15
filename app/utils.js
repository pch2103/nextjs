import axios from "axios";

export async function LoadData(URL) {
    const toGet = `${URL}?populate=*`
    const response = await axios.get(toGet);
    return response.data;
}