import Layout from "@/components/app-layout";
import { columns } from "@/components/posts/columns";
import { DataTable } from "@/components/posts/data-table";
import { usePosts } from "@/hooks/usePosts";

const Home = () => {
  const { isPending, isError, data: posts, error } = usePosts();

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Layout>
      <DataTable columns={columns} data={posts} />
    </Layout>
  );
};

export default Home;
