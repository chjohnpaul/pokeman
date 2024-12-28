import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

export const fetchPokemonList = async (limit, offset) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokémon list:", error);
    throw error;
  }
};

export const fetchPokemonDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokémon details:", error);
    throw error;
  }
};
