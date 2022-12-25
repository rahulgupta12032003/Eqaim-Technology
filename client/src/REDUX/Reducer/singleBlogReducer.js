export const singleBlogReducer = (state={singleBlog : []} , action) => {
  
    switch(action.type) {
      case  "GET_SINGLE_BLOG_REQUEST" :
        return {
            loading : true,
            ...state,
        }

      case "GET_SINGLE_BLOG_SUCCESS" : 
        return {
            loading : false,
            singleBlog : action.payload,
        }  
        
      case "GET_SINGLE_BLOG_FAILED" :
        return {
            loading: false,
            error : action.payload
        }  

      default: return {
        ...state 
      } 
    }

}