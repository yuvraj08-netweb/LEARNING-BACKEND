import express from "express";
import path from "path";
import posts from "./routes/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
import { fileURLToPath } from "url";

const port = process.env.PORT || 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//BODY parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger);

// setup static folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/posts", posts);

// Error Handler Middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.get("/", (req, res) => {
//   //   res.send("<h1> Hello World </h1>");
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   //   res.send("<h3> About Me </h3>");
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });
