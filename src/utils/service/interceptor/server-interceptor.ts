// src/utils/service/api/customFetch.server.ts

import { API_BASE_URL } from "@/utils/config/env";

export const customFetch = async (
  input: string,
  init?: RequestInit
): Promise<any> => {
  const headers = new Headers(init?.headers || {});

  // افزودن Content-Type در صورت نیاز
  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(`${API_BASE_URL}${input}`, {
    ...init,
    headers,
    cache: "no-store", // جلوگیری از کش‌شدن auth requestها
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `HTTP error: ${response.status}`);
  }

  return response.json(); // ✅ به‌صورت مستقیم json برمی‌گردونه
};
