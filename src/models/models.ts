export interface APICharactersResponse {
  info: Info;
  results: Character[];
  error?: string;
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: any;
}

export interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
  error?: string;
}

export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}

export interface APILocationResponse {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
  error?: string;
}

export interface APIEpisodeResponse {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
  error?: string;
}
