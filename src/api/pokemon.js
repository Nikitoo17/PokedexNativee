import { API_HOST } from "../utils/constants";
import axios from "axios";
export async function getPokemonApi(endPointUrl) {
  const url = `${API_HOST}pokemon?limit=20&offset=0`;
  console.log(endPointUrl);
  console.log("realizando peticion a:", endPointUrl || url);

  const response = await axios.get(endPointUrl || url);
  console.log("peticion realizada:", endPointUrl || url);

  return response.data;
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
export async function getPokemonDetailsApi(id) {
  try {
    const url = `${API_HOST}pokemon/${id}`;
    console.log("realizando peticion a:", url);
    const response = await axios.get(url);
    console.log("peticion realizada:", url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
