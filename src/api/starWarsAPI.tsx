import axios from "axios";
import { Film } from "./starWarsTypes";

const api = axios.create({
  baseURL: "https://swapi.dev/api",
});

export const getFilms = async (): Promise<Film[]> => {
  const response = await api.get("/films/");
  return response.data.results;
};

export const getPeople = async (url: string) => {
  const response = await api.get(url);
  return response.data;
};
