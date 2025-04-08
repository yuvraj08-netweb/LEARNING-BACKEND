import express from "express";
import path from "path";
import posts from "./routes/posts.js";
const port = process.env.PORT || 8000;

const app = express();
// setup static folder
// app.use(express.static(path.join(__dirname,"public")));

// app.get("/", (req, res) => {
//   //   res.send("<h1> Hello World </h1>");
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   //   res.send("<h3> About Me </h3>");
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

// Routes

app.use("/api/posts", posts);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
