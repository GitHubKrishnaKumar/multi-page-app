import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from "./actions";

const initialState = {
  loading: false,
  posts: [],
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_POSTS_SUCCESS:
      return { loading: false, posts: action.payload, error: null };
    case FETCH_POSTS_FAILURE:
      return { loading: false, posts: [], error: action.payload };
    default:
      return state;
  }
};

export default postReducer;
