import axios from "axios";

const BASE_URL = "http://localhost:3500";

//testing locally backend will run on 3500
export default axios.create({
  baseURL: BASE_URL,
});

//to refresh tokens in background
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
