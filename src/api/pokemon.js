import axios from "axios";
import { API_POKE } from "../utils/constants";
export const getPokemonApi = async () => {
  try {
    const url = `${API_POKE}/pokemon?limit=20&offset=0`;
    const response = await axios.get(url);
    const result = response.data;
    return result;
  } catch (error) {
    throw error;
  }
};
