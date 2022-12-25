import axios from "axios";

//login user

export const postBlog = (blog) => async (dispatch) => {
  dispatch({ type: "USER_POST_BLOG_REQUEST" });

  try {

    const response = await axios.post(
      "http://localhost:8080/api/blog",
      blog
    );

    console.log(response.data);
    dispatch({ type: "USER_POST_BLOG_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "USER_POST_BLOG_FAILED", payload: error });
  }
};

