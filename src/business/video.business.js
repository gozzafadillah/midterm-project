const VideoRepository = require("../repository/video.repo");

class VideoBusiness {
  constructor() {
    this.videoRepository = new VideoRepository();
  }

  async getAllVideos() {
    try {
      const videos = await this.videoRepository.getAllVideos();
      return videos;
    } catch (error) {
      throw error;
    }
  }
  async getVideoById(id) {
    try {
      const video = await this.videoRepository.getVideoById(id);
      return video;
    } catch (error) {
      throw error;
    }
  }

  async createVideo(video) {
    try {
      const newVideo = await this.videoRepository.store(video);
      return newVideo;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = VideoBusiness;
