import axios from "axios";
//Just For Get some data...
export const reqResApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//Login service
export const loginRestApi = axios.create({
  baseURL: "https://prueba-api.nextia.mx/api/v1",
});



