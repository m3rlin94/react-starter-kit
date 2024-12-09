import { Post } from "@/models/post.model";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Post>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "body",
    header: "Content",
  },
  {
    accessorKey: "userId",
    header: "Author",
  },
];
