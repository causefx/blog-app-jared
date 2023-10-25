"use client";
interface Props {
  post: {
    id: number;
    title: string;
    body: string;
  };
}
export default function PostPage({ post }: Props) {
  return (
    <>
      {/* Blog Post Section */}
      <div className="bg-white dark:text-gray-100 dark:bg-gray-800 h-full">
        <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          {/* Heading */}
          <div className="text-center">
            <div className="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-600 dark:text-indigo-500">
              Blog Post
            </div>
            <h2 className="text-4xl font-black text-black mb-4 dark:text-white">
              {post.title}
            </h2>
          </div>
          {/* END Heading */}

          {/* Blog Post */}
          <article className="prose prose-indigo prose-lg mx-auto dark:prose-invert">
            <p>{post.body}</p>
          </article>
          {/* END Blog Post */}
        </div>
      </div>
      {/* END Blog Post Section */}
    </>
  );
}
