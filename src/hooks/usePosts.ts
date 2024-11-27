import { getAllPostsAsync } from "@/services/post.service";
import { useQuery } from "@tanstack/react-query";

export const usePosts = () =>
  useQuery({
    queryKey: ["posts"],
    queryFn: getAllPostsAsync,
    select: (result) => result.data,
  });
