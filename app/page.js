import Link from "next/link";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Главная страница</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link href={`/post/` + post.id}>Детально</Link>
        </div>
      ))}
    </div>
  );
}
