const express = require("express");

function setupVideoRoutes() {
  const router = express.Router();
  router.get("/", (_, res) => {
    res.send("Hello World!");
  });
  return router;
}
module.exports = setupVideoRoutes;
