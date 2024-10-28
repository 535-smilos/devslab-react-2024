import axios from "axios";

const reqresApi = axios.create({
  baseURL: "https://reqres.in/api",
  timeout: 3000,
  headers: { "Content-Type": "application/json" },
});

reqresApi.interceptors.request.use((request) => {
  //autorizacija se ovdje obavlja
  request.headers.Authorization = `Token`;
  console.log(request);
  return request;
});

reqresApi.interceptors.response.use((response) => {
  //vrace da li postoji response, tj da li moze da se autorizuje tokom nekog vremena
  console.log(response);
  return response; //fji moze da se vrati i response.data, ali je ljepse napisati funkcije koje ce vratiti data
});

//funkcija koja ce pozivati api i da vrati obicni data
export const callReqresApi = async (route, data, method) => {
  const response = await reqresApi(route,{ method, data });
  return response.data;
};
