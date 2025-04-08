import express from "express";
const router = express.Router();

let posts = [
  {
    id: 1,
    title: "Post One",
  },
  {
    id: 2,
    title: "Post Two",
  },
  {
    id: 3,
    title: "Post Three",
  },
];

// get all posts
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit && limit > 0)) {
    return res.status(200).json(posts.slice(0, limit));
  }

  res.status(200).json(posts);
});

// get post by id
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.filter((post) => post.id === id);

  if (post.length === 0) {
    return res
      .status(404)
      .json({ msj: "A post with the given ID was not found." });
  }

  res.status(200).json(post);
});


export default router;