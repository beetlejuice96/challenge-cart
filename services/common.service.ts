import axios from "axios";
import CONFIG from "../config";

export const APIClient = axios.create({
  baseURL: CONFIG.SERVICES.API_MOCK.URL,
  timeout: 5000,
});
