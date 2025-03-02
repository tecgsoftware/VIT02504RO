import React, { useState } from "react";
import { useFetchPosts } from "../hooks/useFetchPosts";
import SearchBar from "../components/SearchBar.jsx";
import Spinner from "../components/Spinner.jsx";
import PostCard from "../components/PostCard.jsx";


const Home = () => {
  const { posts, highlightedPosts, loading } = useFetchPosts();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800">Community Hub</h1>
        <p className="text-lg text-gray-600 mt-2">
          Stay connected with the latest updates, events, and announcements.
        </p>
      </header>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Top Highlights</h2>
        {loading ? <Spinner /> : (
          <div className="grid md:grid-cols-3 gap-6">
            {highlightedPosts.map((post) => (
              <PostCard key={post.id} title={post.title} />
            ))}
          </div>
        )}
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Search Results</h2>
        {loading ? <Spinner /> : (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => <PostCard key={post.id} title={post.title} />)
            ) : (
              <p className="text-gray-600 text-center w-full">No matching posts found.</p>
            )}
          </div>
        )}
      </section>

      <footer className="text-center mt-12 text-gray-500 text-sm">
        © 2025 Community Hub. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
