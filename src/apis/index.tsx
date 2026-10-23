import axiosClient from "../utils/authorizeAxios";
import { API_ROOT } from "../utils/constants";

export const fetchListCategories = async () => {
  const response = await axiosClient.get(`${API_ROOT}/v1/categories`);
  return response.data;
};

export const fetchGetArticles = async () => {
  const response = await axiosClient.get(`${API_ROOT}/v1/articles`);
  return response.data;
};
