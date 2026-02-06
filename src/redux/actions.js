export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: FETCH_POSTS_REQUEST });
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    // Add imgSrc to each post
    const postsWithImages = data.map(post => ({
      ...post,
      imgSrc: `https://picsum.photos/200?random=${post.id}`
    }));
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: postsWithImages });
  } catch (error) {
    dispatch({ type: FETCH_POSTS_FAILURE, payload: error.message });
  }
};
