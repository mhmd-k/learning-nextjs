import data from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";

export default function Page({ params }: { params: { id: string } }) {
  const post = data.posts.find((e) => e.id === params.id);

  if (!post) return;

  return (
    <div>
      <Post {...post} />
    </div>
  );
}
