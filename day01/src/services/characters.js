import { callRickAndMortyApi } from "../apis/rick-and-morty";

//metoda koja ce pozivati api i da vrati sve karaktere
export const getAllCharacters = async ({ page }) =>
  await callRickAndMortyApi(`/character/?page=${page}`, "GET");
