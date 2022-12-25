import React, { useState } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineFileDone, AiOutlineUnorderedList } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FiBold, FiItalic } from "react-icons/fi";
import { RxUnderline } from "react-icons/rx";
import { TbStrikethrough } from "react-icons/tb";
import { MdOutlineFormatColorText } from "react-icons/md";
import { BsLink45Deg } from "react-icons/bs";
import styles from "../styles/NewBlog.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postBlog } from "../REDUX/Actions/postBlogActions";

const NewBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const blogState = useSelector((state) => state.postBlogReducer);

  const { loading, success, error } = blogState;

  const handlePostBlog = () => {
    const blog = {
      title: title,
      description: description,
    };

    if (title === "" && description === "") {
      alert("Please Enter the Blog Title and Description");
    } else if (title === "") {
      alert("Please Enter the Title");
    } else if (description === "") {
      alert("Please Enter the Description");
    } else {
      dispatch(postBlog(blog));
      alert("Blog Posted Successfully!");
      setTitle("");
      setDescription("");
    }
  };

  const [textBold, setTextBold] = useState("none");
  const [textItalic, setTextItalic] = useState("none");

  const textChangeBold = () => {
    setTextBold("bold", "normal");
  };
  const textChangeItalic = () => {
    setTextItalic("italic");
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <button className={styles.new_blog_home_button} onClick={handleHome}>
          <HiOutlineHome />
        </button>

        <div className={styles.post_container}>
          <div className={styles.rectangle2}>
            <button className={styles.bold} onClick={textChangeBold} value={textBold}>
              <FiBold />
            </button>
            <button className={styles.italic} onClick={textChangeItalic} value={textItalic}>
              <FiItalic />
            </button>
            <button className={styles.underline}>
              <RxUnderline />
            </button>
            <button className={styles.strikeoff}>
              <TbStrikethrough />
            </button>
            <button className={styles.text}>
              <MdOutlineFormatColorText />
            </button>
            <button className={styles.list}>
              <AiOutlineUnorderedList />
            </button>
            <button className={styles.link}>
              <BsLink45Deg />
            </button>
          </div>
          <div className={styles.createBlog}>
            <input
              type="text"
              placeholder="Enter the Blog Title"
              className={styles.blog_title}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              cols="30"
              rows="10"
              className={styles.blog_textarea}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ fontWeight:{textBold}, fontStyle:{textItalic} }}
            />

            <button
              className={styles.new_blog_done_button}
              onClick={handlePostBlog}
            >
              <AiOutlineFileDone />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewBlog;
