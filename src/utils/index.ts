import { currencies } from "./currencies"

const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

const BASE_URL = `${API_URL}${API_KEY}`

export {
  BASE_URL,
  currencies
}