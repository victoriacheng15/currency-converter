import { currencies } from "./currencies"

const API_KEY = import.meta.env.VITE_API_KEY

const BASE_URL = `https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}`

export {
  BASE_URL,
  currencies
}