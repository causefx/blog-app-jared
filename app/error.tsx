"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <div
        id="page-container"
        className="flex flex-col mx-auto w-full min-h-screen min-w-[320px] bg-gray-100 dark:text-gray-100 dark:bg-gray-900"
      >
        <main id="page-content" className="flex flex-auto flex-col max-w-full">
          <div className="relative flex items-center min-h-screen bg-white overflow-hidden dark:bg-gray-800">
            <div
              className="absolute left-0 top-0 bottom-0 w-48 bg-red-50 transform md:skew-x-6 -ml-44 md:-ml-28 dark:bg-red-500 dark:bg-opacity-10"
              aria-hidden="true"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-48 bg-red-50 transform md:skew-x-6 -mr-44 md:-mr-28 dark:bg-red-500 dark:bg-opacity-10"
              aria-hidden="true"
            />
            <div className="relative text-center space-y-16 container xl:max-w-7xl mx-auto px-8 py-16 lg:py-32">
              <div>
                <div className="mb-5 text-red-300 dark:text-red-300/50">
                  <svg
                    className="hi-outline hi-server inline-block w-12 h-21"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z"
                    />
                  </svg>
                </div>
                <div className="text-6xl md:text-7xl font-extrabold text-red-600 dark:text-red-500">
                  500
                </div>
                <div
                  className="w-12 h-1.5 bg-gray-200 rounded-lg mx-auto my-6 md:my-10 dark:bg-gray-700"
                  aria-hidden="true"
                />
                <h1 className="text-2xl md:text-3xl font-extrabold mb-3 text-gray-600">
                  Houston, We Have a Problem
                </h1>
                <h2 className="md:leading-relaxed font-medium text-gray-500 lg:w-3/5 mx-auto mb-5 dark:text-gray-400">
                  There was a server error
                </h2>
              </div>
              <button
                onClick={() => reset()}
                className="group inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
              >
                <svg
                  className="hi-mini hi-arrow-path inline-block w-5 h-5 transition opacity-50 group-hover:opacity-100"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Try Refreshing</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
