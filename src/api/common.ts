import wretch from "wretch"
import { BASE_URL } from "./config"

const api =
  wretch(BASE_URL, { mode: "cors" })
    .errorType("json")
    .resolve(r => r.json())

export async function fetchUpcomingAuctions(query: string) {
    try {
      const res = await api.get(`/api/ProductList${query ? query : '?page=1'}&limit=5`)
      return res;
    }
    catch (error) {
      return []
    }
  }

  export async function fetchPopularVendors() {
    try {
      const res = await api.get(`/api/popularVendors`)
      return res
    }
    catch (e) {
      return []
    }
  }
