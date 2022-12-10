import axiosInstance from "axiosInstance";
import { PokemonListResponse, PokemonResponse } from "types/pokemonType";

const endpoint = "pokemon";

const getAll = async (limit = 20, offset = 0): Promise<PokemonListResponse> => {
  let query = `?limit=${limit}&offset=${offset}`;

  const response = await axiosInstance.get(endpoint + query);
  return response.data;
};

const getById = async (id: string): Promise<PokemonResponse> => {
  const response = await axiosInstance.get(endpoint + `/${id}`);
  return response.data;
};

const pokemonService = {
  getAll,
  getById,
};

export default pokemonService;
