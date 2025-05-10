import { customFetch } from "../../interceptor/server-interceptor";

// categories
export const getCategories = async () => {
  const data = await customFetch("/categories", { method: "GET" });
  console.log(data)
  return data;
};

