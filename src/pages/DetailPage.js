// src/pages/DetailPage.js

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams(); // Get the post ID from URL
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching the blog post from an API
    setTimeout(() => {
      const fetchedPost = {
        id,
        title: `Post ${id} Title`,
        content: `This is the full content of blog post ${id}.`,
      };
      setPost(fetchedPost);
      setLoading(false);
    }, 1000); // Simulated delay
  }, [id]); // Re-fetch when the post ID changes

  if (loading) return <div>Loading...</div>; // Loading state

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <button onClick={() => navigate("/")}>Back to Home</button>{" "}
      {/* Navigate back to home */}
    </div>
  );
};

export default DetailPage;
