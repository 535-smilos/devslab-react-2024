import axios from "axios";

const rickAndMortyApi = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  timeout: 3000,
  headers: { "Content-Type": "application/json" },
});

rickAndMortyApi.interceptors.request.use((request) => {
  //autorizacija se ovdje obavlja
  request.headers.Authorization = `Token`;
  console.log(request);
  return request;
});

rickAndMortyApi.interceptors.response.use((response) => {
  //vrace da li postoji response, tj da li moze da se autorizuje tokom nekog vremena
  console.log(response);
  return response; //fji moze da se vrati i response.data, ali je ljepse napisati funkcije koje ce vratiti data
});

//funkcija koja ce pozivati api i da vrati obicni data
export const callRickAndMortyApi = async (route, method) => {
  const response = await rickAndMortyApi(route, { method: method });
  return response.data;
};
