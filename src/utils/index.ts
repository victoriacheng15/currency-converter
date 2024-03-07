import { currencies } from "./currencies"

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = `https://api.freecurrencyapi.com/v1/latest`

export {
  BASE_URL,
  currencies,
  API_KEY
}