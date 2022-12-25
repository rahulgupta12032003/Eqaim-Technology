import axios from "axios";

export const getSingleBlog = (id) => async (dispatch) => {
  dispatch({ type: "GET_SINGLE_BLOG_REQUEST" });

  try {

    const response = await axios.get(
      `http://localhost:8080/api/allblogs/${id}`
    );
    console.log(response.data);
    dispatch({ type: "GET_SINGLE_BLOG_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_SINGLE_BLOG_FAILED", payload: err });
    console.error(err);
  }
};
