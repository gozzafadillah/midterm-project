const { default: mongoose } = require("mongoose");
const videoSchema = require("../models/video.model");

class VideoRepository {
  constructor() {
    this.videos = videoSchema;
  }

  async getAllVideos() {
    try {
      const videos = await this.videos.find();
      return videos;
    } catch (error) {
      throw error;
    }
  }
  async getVideoById(id) {
    try {
      const video = await this.videos.findById(id);
      return video;
    } catch (error) {
      throw error;
    }
  }
  async store(video) {
    try {
      video.videoId = new mongoose.Types.ObjectId();
      const newVideo = await this.videos.create(video);
      return newVideo;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = VideoRepository;
