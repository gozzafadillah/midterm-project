const { default: mongoose } = require("mongoose");

const videoSchema = new mongoose.Schema({
  videoId: {
    type: String,
    required: true,
    unique: true,
  },
  urlImageThumbnail: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Video", videoSchema);
