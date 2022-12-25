import React, { useEffect } from "react";
import { getAllBlogs } from "../REDUX/Actions/blogActions";
import { useDispatch, useSelector } from "react-redux";
import styles from '../styles/Hompage.module.css'
import {FaNotesMedical} from "react-icons/fa"
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const ReducerState = useSelector((state) => state.blogsReducer);
  const { blogs, loading, error } = ReducerState;
  const navigate = useNavigate();

  console.log(blogs)

  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);

  const handleBlogDetails = (data) => {
    console.log(data);
    navigate(`/details/${data._id}`);
  }

  const handleNewPost = () => {
    navigate('/newblog');
  }

  return(
    <div>
        <div className={styles.home_container}>
          {
            blogs.map((element, index) => {
                return (
                    <div key={element._id} onClick={() => handleBlogDetails(element)}>
                       <h2 className={styles.name}>{element.name}</h2>
                    </div>
                )
            })
          }
          <button className={styles.create_new_post} onClick={handleNewPost}><FaNotesMedical /></button>
        </div>
    </div>
  );
};

export default HomePage;
