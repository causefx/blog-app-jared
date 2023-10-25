import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog 1 Hour Test",
  description: "Blog Next Test App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItems = [
    {
      name: "Blog",
      url: "/",
    },
  ];
  return (
    <html lang="en">
      <body className={inter.className + " dark h-screen"}>
        {/* Main Header Section: Simple */}
        <div className="relative overflow-hidden bg-white dark:text-gray-100 dark:bg-gray-900">
          {/* Main Header */}
          <header
            id="page-header"
            className="relative flex flex-none items-center py-8"
          >
            {/* Main Header Content */}
            <div className="flex text-center items-center justify-between container xl:max-w-7xl mx-auto px-4 lg:px-8">
              {/* Left Section */}
              <div className="flex items-center">
                {/* Logo */}
                <a
                  href="/"
                  className="group inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
                >
                  <span>Job Blog</span>
                </a>
                {/* END Logo */}
              </div>
              {/* END Left Section */}

              {/* Right Section */}
              <div className="flex items-center">
                {/* Navigation */}
                <nav className="lg:block space-x-3 md:space-x-6">
                  {menuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      className="text-sm font-semibold text-gray-900 hover:text-indigo-600 dark:text-gray-100 dark:hover:text-indigo-400"
                    >
                      <span>{item.name}</span>
                    </a>
                  ))}
                </nav>
                {/* END Navigation */}
              </div>
              {/* END Right Section */}
            </div>
            {/* END Main Header Content */}
          </header>
          {/* END Main Header */}
        </div>
        {/* END Main Header Section: Simple */}
        {children}
      </body>
    </html>
  );
}
