import axios from "axios";

export const getAllBlogs = () => async (dispatch) => {
  dispatch({ type: "GET_BLOGS_REQUEST" });

  try {

    const response = await axios.get(
      "http://localhost:8080/api/allblogs"
    );
    console.log(response.data);
    dispatch({ type: "GET_BLOGS_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_BLOGS_FAILED", payload: err });
    console.error(err);
  }
};
