import axios from "axios";

export const publicRequest = axios.create({
    // baseURL: "http://localhost:3000/api/",
    baseURL: "https://travel-site-amsc.onrender.com/api/",
  });

  // export const BASE_URL = "http://localhost:3000/api/"
  export const BASE_URL = "https://travel-site-amsc.onrender.com/api/"
  