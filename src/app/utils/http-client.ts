import axios from "axios";

const apiService = axios.create({
  baseURL: "http://www.omdbapi.com/",
  params: { apikey: "abe4ea91", page: 1 }, // This apikey is for demo purposes only, in production you should use a more secure method of storing your apikey
});

export default apiService;
