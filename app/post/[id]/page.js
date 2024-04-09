import Post from "@/app/components/Post";

export async function generateMetadata({ params, searchParams }) {
  const post = await getPosts(params.id);
  return {
    title: post.title + " - статья на сайте",
    description: post.body
  };
}

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
