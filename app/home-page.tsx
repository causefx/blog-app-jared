"use client";
interface Props {
  id: number;
  title: string;
  body: string;
}
// @ts-ignore
export default function HomePage({ recentPosts }) {
  return (
    <>
      {/* Blog List Section */}
      <div className="bg-white dark:text-gray-100 dark:bg-gray-800">
        <div className="space-y-12 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8">
          {/* Heading */}
          <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl font-black text-black mb-2 dark:text-white">
                Latest Posts
              </h2>
              <h3 className="text-xl leading-relaxed font-medium text-gray-700 dark:text-gray-300">
                Test app for job
              </h3>
            </div>
          </div>
          {/* END Heading */}
          <hr className="dark:border-gray-700/75" />
          {/* Blog Posts */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8"
            id="posts"
          >
            {recentPosts.slice(0, 10).map((post: Props) => (
              <div
                className="flex flex-col rounded-lg bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-950 shadow-xl transition ease-out duration-150 hover:rotate-1 hover:scale-105"
                key={post.id}
              >
                <a href={"/post/" + post.id}>
                  <div className="py-4 px-5 bg-gray-50 dark:bg-gray-800/50 grow">
                    <h3 className="font-medium">{post.title}</h3>
                  </div>
                </a>

                <div className="p-5 grow">
                  <p>{post.body}</p>
                </div>
              </div>
            ))}
          </div>
          {/* END Blog Posts */}
        </div>
      </div>
      {/* END Blog List Section */}
    </>
  );
}
