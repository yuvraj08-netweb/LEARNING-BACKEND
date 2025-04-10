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

// @desc GET ALL POSTS
// @route GET /api/posts
export const getAllPosts = (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit && limit > 0)) {
    return res.status(200).json(posts.slice(0, limit));
  }

  res.status(200).json(posts);
};

// @desc GET POST BY ID
// @route GET /api/posts/:id
export const getPostById = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.filter((post) => post.id === id);

  if (post.length === 0) {
    const error = new Error(` A post with id ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  res.status(200).json(post);
};

// @desc CREATE POST
// @route POST /api/posts
export const createPost = (req, res, next) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    const error = new Error("Title is required.");
    error.status = 400;
    return next(error);
  }
  posts.push(newPost);
  res.status(201).json(posts);
};

// @desc UPDATE POST
// @route PUT /api/posts/:id
export const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(` A post with id ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  post.title = req.body.title;
  res.status(200).json(posts);
};

// @desc DELETE POST
// @route DELETE /api/posts/:id
export const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(` A post with id ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
};
