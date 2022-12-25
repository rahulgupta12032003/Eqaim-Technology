export const postBlogReducer = (state={} , action) => {
    switch (action.type) {
        case "USER_POST_BLOG_REQUEST" : return {
           loading: true,
        }
        case "USER_POST_BLOG_SUCCESS" : return {
           loading: false,
           success: true,
         //   currentUser: action.payload
        }
        case "USER_POST_BLOG_FAILED" : return {
           loading: false,
           error : action.payload
        }
        default : return state;
    }
}