const express = require("express");

function SetupCommentRoute() {
  const router = express.Router();
  router.use("/comments");
  return router;
}

module.exports = SetupCommentRoute;
