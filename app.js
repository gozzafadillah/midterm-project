// Import file konfigurasi MongoDB
require("./src/config/mongodb.config");

const express = require("express");
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
const cors = require("cors");

// Gunakan rute-rute yang telah didefinisikan
const SetupVideoRoutes = require("./src/routes/video.route");
const videoRoutes = SetupVideoRoutes();
const setupProductRoutes = require("./src/routes/product.route");
const productRoutes = setupProductRoutes();
const SetupUserRoutes = require("./src/routes/user.route");
const userRoutes = SetupUserRoutes();
const SetupCommentRoutes = require("./src/routes/comment.route");
const commentRoutes = SetupCommentRoutes();
app.use("/videos", cors(), videoRoutes);
app.use("/products", cors(), productRoutes);
app.use("/users", cors(), userRoutes);
app.use("/comments", cors(), commentRoutes);
app.get("/", cors(), (req, res) => {
  res.send("Hello World!");
});

// Jalankan aplikasi Express pada port yang ditentukan
app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening on port ${port}`);
});
