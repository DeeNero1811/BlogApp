// src/pages/HomePage.js

import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const posts = [
    {
      id: 1,
      title: "First Blog Post",
      excerpt: "This is the first blog post excerpt...",
    },
    {
      id: 2,
      title: "Second Blog Post",
      excerpt: "This is the second blog post excerpt...",
    },
  ];

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link to={`/post/${post.id}`}>Read more</Link>{" "}
            {/* Link to DetailPage */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
