import apiService from "../utils/http-client";

export const searchMoviesByTitle = async (query: string, page?: number) => {
  const response = await apiService.get("", {
    params: page ? { page: page, s: query } : { s: query },
  });
  return response.data;
};
