import { API_HOST } from "../utils/constants";
import axios from "axios";
export async function getPokemonApi() {
  const url = `${API_HOST}pokemon?limit=20&offset=0`;
  console.log("Fetching from:", url); // Agrega esta línea para verificar la URL

  const response = await axios.get(url);
  console.log("Response status:", response.status); // Verifica el estado de la respuesta

  return response.data;
  // const response = await fetch(url);
  // console.log("Response status:", response.status); // Agrega esta línea para verificar el estado de la respuesta

  // const result = await response.json();
  // console.log("Result:", result); // Agrega esta línea para verificar el resultado

  // return result;
}
export async function getPokemonDetailsByUrlApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
