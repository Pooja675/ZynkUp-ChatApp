import {HOST} from "../utils/constant"
import axios from "axios"

const BASE_URL =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_URL || "http://localhost:5555"
    : "/api";

export const apiClient = axios.create({
    // baseURL: HOST
    baseURL: BASE_URL
})