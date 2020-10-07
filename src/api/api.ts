import useSWR from "swr";
import {
  APICharactersResponse,
  APIEpisodeResponse,
  APILocationResponse,
  Character,
} from "../models/models";

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useGetAllCharacters(page = 0) {
  const { error, data } = useSWR<APICharactersResponse>(
    `https://rickandmortyapi.com/api/character?page=${page}`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
    }
  );

  return {
    characters: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useGetLocation(id?: string) {
  const { error, data } = useSWR<APILocationResponse>(
    id ? `https://rickandmortyapi.com/api/location/${id}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  return {
    location: data,
    isLoading: !error && !data,
    isError: error,
  };
}
export function useGetEpisode(id?: string) {
  const { error, data } = useSWR<APIEpisodeResponse>(
    id ? `https://rickandmortyapi.com/api/episode/${id}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  return {
    episode: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useGetCharacters(ids: string[]) {
  const { error, data } = useSWR<Character[]>(
    ids && ids.length
      ? `https://rickandmortyapi.com/api/character/${ids.join(",")}`
      : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
    }
  );

  return {
    characters: data,
    isLoading: !error && !data,
    isError: error,
  };
}
