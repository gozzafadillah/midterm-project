// Import file konfigurasi MongoDB
require("./src/config/mongodb.config");

const express = require("express");
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
const cors = require("cors");
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Gunakan rute-rute yang telah didefinisikan
const SetupVideoRoutes = require("./src/routes/video.route");
const videoRoutes = SetupVideoRoutes();
const setupProductRoutes = require("./src/routes/product.route");
const productRoutes = setupProductRoutes();
const SetupUserRoutes = require("./src/routes/user.route");
const userRoutes = SetupUserRoutes();
const SetupCommentRoutes = require("./src/routes/comment.route");
const commentRoutes = SetupCommentRoutes();
app.use("/videos", cors(corsOptions), videoRoutes);
app.use("/products", cors(corsOptions), productRoutes);
app.use("/users", cors(corsOptions), userRoutes);
app.use("/comments", cors(corsOptions), commentRoutes);
app.get("/", cors(corsOptions), (req, res) => {
  res.send("Hello World!");
});

// Jalankan aplikasi Express pada port yang ditentukan
app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening on port ${port}`);
});
