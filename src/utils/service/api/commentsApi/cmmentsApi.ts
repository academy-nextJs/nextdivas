import axiosInstance from "../../interceptor/axiosInstance";

export const getHouseComments = async ({
  houseId,
  page = 1,
  limit = 10,
}: {
  houseId: string | undefined;
  page?: number;
  limit?: number;
}) => {
  const response = await axiosInstance.get(`/houses/${houseId}/comments`, {
    params: { page, limit },
  });
  return response.data;
};
