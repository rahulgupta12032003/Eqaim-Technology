import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleBlog } from "../REDUX/Actions/singleBlogAction";
import styles from "../styles/Details.module.css";
import {HiOutlineHome} from "react-icons/hi"

const Details = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const ReducerState = useSelector((state) => state.singleBlogReducer);
  const { singleBlog, loading, error } = ReducerState;
  const { id } = useParams();

  console.log(singleBlog);

  useEffect(() => {
    dispatch(getSingleBlog(id));
  }, []);

  const handleHome = () => {
    navigate("/")
  }

  return (
    <>
      <div className={styles.detail_container}>
         <h1 className={styles.detail_title}>{singleBlog.title}</h1>
         <div className={styles.description}>
            {singleBlog.description}
         </div>
         <button className={styles.detail_home_button} onClick={handleHome}><HiOutlineHome /></button>
      </div>
    </>
  );
};

export default Details;
