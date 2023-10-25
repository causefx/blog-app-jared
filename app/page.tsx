import HomePage from "@/app/home-page";
async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data from site");
  }

  return res.json();
}
export default async function Page() {
  const recentPosts = await getPosts();
  return <HomePage recentPosts={recentPosts} />;
}
