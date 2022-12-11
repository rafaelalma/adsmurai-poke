export type PokemonListElement = {
  name: string;
  url: string;
};

export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListElement[];
};

export type PokemonResponse = {
  id: number;
  name: string;
  sprites: {
    front_default: string | null;
    back_default: string | null;
  };
  types: [
    {
      slot: number;
      type: {
        name: string;
      };
    }
  ];
  height: number;
  weight: number;
  abilities: [
    {
      slot: number;
      ability: {
        name: string;
      };
    }
  ];
};
