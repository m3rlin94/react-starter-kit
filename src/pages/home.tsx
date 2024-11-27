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
    <ul>
      {posts.map((aPost) => (
        <li key={aPost.id}>{aPost.title}</li>
      ))}
    </ul>
  );
};

export default Home;
