const express = require("express");
const router = express.Router();
const blogModel = require("../models/blogModel");

router.post("/blog", (req, res) => {
  const { title, description } = req.body;
  const newBlog = new blogModel({ title, description });

  if (!title || !description) {
    res
      .status(500)
      .send({ status: 500, message: "Fill all the required fields!" });
  }
  try {
    newBlog.save();
    res.send("Blog Created Successfully!");
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

// Get all Blogs
router.get("/allblogs", async (req, res) => {
  try {
    const allBlogsData = await blogModel.find({});
    res.send(allBlogsData);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});


// find By id
router.get("/allblogs/:id", async (req, res) => {
  try {
    const blogData = await blogModel.findById(req.params.id);
    res.send(blogData);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});


module.exports = router;
