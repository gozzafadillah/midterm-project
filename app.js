// Import file konfigurasi MongoDB
require("./src/config/mongodb.config");

const express = require("express");
const app = express();
app.use(express.json());

const port = 3000;

// Gunakan rute-rute yang telah didefinisikan
const setupVideoRoutes = require("./src/routes/video.route");
const videoRoutes = setupVideoRoutes();
app.use("/videos", videoRoutes);

// Jalankan aplikasi Express pada port yang ditentukan
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
