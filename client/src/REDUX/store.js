import {combineReducers} from "redux";

import {legacy_createStore as createStore , applyMiddleware} from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';
import { blogsReducer } from "./Reducer/blogReducer";
import { singleBlogReducer } from "./Reducer/singleBlogReducer";
import { postBlogReducer } from "./Reducer/postBlogReducer";


const finalReducer = combineReducers({
    // loginUserReducer : loginUserReducer,
    singleBlogReducer : singleBlogReducer,
    blogsReducer : blogsReducer,
    postBlogReducer : postBlogReducer
});


const initialState = {
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk))); 

export default store;