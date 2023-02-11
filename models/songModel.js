const { Schema, model } = require("mongoose");

const songSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  artist: { type: String, ref: "Artist" },
  description: String,
  duration: Number,
  createdAt: Date,
  updateAt: Date,
  url: String,
});

const Song = model("Song", songSchema);
exports.Song = Song;
