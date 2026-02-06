import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function DetailPage() {
  const { id } = useParams();
  const { posts } = useSelector(state => state.postsData);
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) return <p>Post not found</p>;

  return (
    <div className="detail-container">
        <h1>Details Page For Post With ID {post.userId}</h1>
      <img src={post.imgSrc} alt="post" />
      <p><strong>User ID:</strong> {post.userId}</p>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      
      
    </div>
  );
}

export default DetailPage;
