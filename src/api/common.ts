import { BASE_URL } from "./config"

export async function fetchUpcomingAuctions(query: string) {
    const res = await fetch(`${BASE_URL}/api/ProductList${query ? query : '?page=1'}&limit=5`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

  export async function fetchPopularVendors() {
    const res = await fetch(`${BASE_URL}/api/popularVendors`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }
