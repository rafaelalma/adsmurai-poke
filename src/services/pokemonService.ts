import axiosInstance from "axiosInstance";
import { PokemonListResponse, PokemonResponse } from "types/pokemonType";

const endpoint = "pokemon";

const getAll = async (): Promise<PokemonListResponse> => {
  const response = await axiosInstance.get(endpoint);
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
