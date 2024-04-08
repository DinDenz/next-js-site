import Post from "@/app/components/Post";

async function getPosts(id) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const data = await res.json();
  return data;
}

const PostPage = async ({ params }) => {
  const post = await getPosts(params.id);

  return (
    <div>
      <Post post={post} />
    </div>
  );
};

export default PostPage;
