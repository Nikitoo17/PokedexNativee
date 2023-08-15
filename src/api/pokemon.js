import { API_POKE } from "../utils/constants";
export const getPokemonApi = async () => {
  try {
    const url = `${API_POKE}/pokemon?limit=20&offset=0`;
  } catch (error) {
    throw error;
  }
};
