import { useState, useEffect } from "react";
import postsData from "../data/postsData"; // Import dummy data

export const useFetchPosts = () => {
  const [posts, setPosts] = useState([]);
  const [highlightedPosts, setHighlightedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPosts(postsData);
      setHighlightedPosts(postsData.filter((post) => post.highlight));
      setLoading(false);
    }, 1000); // Simulating a delay (1s)
  }, []);

  return { posts, highlightedPosts, loading };
};
