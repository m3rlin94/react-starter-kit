import { Post } from "@/models/post.model";
import axiosInstance from "@/services/api.service";
import { AxiosResponse } from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getAllPostsAsync = async (): Promise<AxiosResponse<Post[]>> => {
  return axiosInstance.get(`${BASE_URL}/posts`);
};

export const getPostDetailsAsync = async (
  postId: string,
): Promise<AxiosResponse<Post>> => {
  return axiosInstance.get(`${BASE_URL}/posts/${postId}`);
};
