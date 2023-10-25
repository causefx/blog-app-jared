import PostPage from "@/app/post/[id]/post-page";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: number;
  };
}

async function getPost(params: { id: number }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function Page({ params }: Props) {
  const post = await getPost(params);

  return <PostPage post={post} />;
}
