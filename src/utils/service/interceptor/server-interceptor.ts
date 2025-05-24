import { API_BASE_URL } from "@/utils/config/env";

export const customFetch = async (
  input: string,
  init?: RequestInit
): Promise<any> => {
  const headers = new Headers(init?.headers || {});

  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (token && !headers.has("Authorization")) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${API_BASE_URL}${input}`, {
    ...init,
    headers,
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `HTTP error: ${response.status}`);
  }

  return response.json();
};
