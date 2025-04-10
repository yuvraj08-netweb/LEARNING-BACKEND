import express from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPostById,
  updatePost,
} from "../controllers/postController.js";

const router = express.Router();

// get all posts
router.get("/", getAllPosts);

// get post by id
router.get("/:id", getPostById);

// Create a new post
router.post("/", createPost);

// Update Post
router.put("/:id", updatePost);

// Delete Post
router.delete("/:id", deletePost);

export default router;
