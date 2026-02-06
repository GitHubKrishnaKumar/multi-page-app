import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import { Link } from "react-router-dom";

function HomePage() {
  const dispatch = useDispatch();
  const { loading, posts, error } = useSelector(state => state.postsData);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="home-container">
      {posts.map(post => (
        <div key={post.id} className="card">
          <img src={post.imgSrc} alt="post" />
          <h3>{post.title.slice(0, 20)}...</h3>
          <p>{post.body.slice(0, 50)}... <Link to={`/item/${post.id}`}>Read More</Link></p>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
