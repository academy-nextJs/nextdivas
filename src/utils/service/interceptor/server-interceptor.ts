import { unstable_cache } from "next/cache";

export const customFetch = unstable_cache(
  async (input: RequestInfo, init?: RequestInit) => {
    const baseURL = process.env.API_BASE_URL;
    const headers = new Headers(init?.headers);

    const response = await fetch(`${baseURL}${input}`, { ...init, headers });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    return response.json();
  },
  [],
  { revalidate: 60 }
);
