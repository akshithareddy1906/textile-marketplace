import axios from "axios";

const API = axios.create({
  baseURL: "https://textile-marketplace-server.onrender.com/api",
});

export default API;