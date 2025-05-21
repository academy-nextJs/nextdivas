// src/utils/config/env.ts

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;
if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
  throw new Error("API base URL is not defined!");
}
