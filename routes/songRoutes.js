const express = require("express");
const { createSong, getSong, deleteSong } = require("../controllers/songController");

const router = express.Router();

router
  .get("/songs", getSong)
  .post("/songs", createSong)
  .put("/songs/:id", () => {})
  .delete("/songs/:id", deleteSong);

exports.songsRoutes = router;
