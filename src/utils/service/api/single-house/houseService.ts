// src/utils/service/houseService.ts
import axiosInstance from "../../interceptor/axiosInstance";

export const getHouseById = async (id: string | undefined) => {
  const response = await axiosInstance.get(`/houses/3`);
  return response.data;
};
