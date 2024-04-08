import Link from "next/link";

const Post = ({ post }) => {
  return (
    <>
      <Link href="/">to Main</Link>
      <br />
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <strong>Author ID: {post.userID}</strong>
    </>
  );
};

export default Post;
