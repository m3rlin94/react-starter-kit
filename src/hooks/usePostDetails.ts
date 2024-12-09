import { getPostDetailsAsync } from "@/services/post.service";
import { useQuery } from "@tanstack/react-query";

export const usePostDetails = (id: string) =>
  useQuery({
    queryKey: ["posts", "detail", id],
    queryFn: () => getPostDetailsAsync(id),
    select: (result) => result.data,
  });
