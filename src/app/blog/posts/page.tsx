import data from "../../lib/placeholder-data";
import Post from "../../ui/components/posts/Post";

export default function Page() {
  return (
    <div>
      <h1>Posts</h1>
      <div>
        {data.posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
