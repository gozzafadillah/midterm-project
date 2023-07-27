// Import file konfigurasi MongoDB
require("./src/config/mongodb.config");

const express = require("express");
const app = express();
app.use(express.json());

const port = 3000;

// Gunakan rute-rute yang telah didefinisikan
const SetupVideoRoutes = require("./src/routes/video.route");
const videoRoutes = SetupVideoRoutes();
const setupProductRoutes = require("./src/routes/product.route");
const productRoutes = setupProductRoutes();
const SetupUserRoutes = require("./src/routes/user.route");
const userRoutes = SetupUserRoutes();
app.use("/videos", videoRoutes);
app.use("/products", productRoutes);
app.use("/users", userRoutes);

// Jalankan aplikasi Express pada port yang ditentukan
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
