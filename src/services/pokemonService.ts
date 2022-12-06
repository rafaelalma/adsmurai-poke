import axiosInstance from "axiosInstance";
import { PokemonListResponse } from "types/pokemonType";

const endpoint = "pokemon";

const getAll = async (): Promise<PokemonListResponse> => {
  const response = await axiosInstance.get(endpoint);
  return response.data;
};

const pokemonService = {
  getAll,
};

export default pokemonService;
