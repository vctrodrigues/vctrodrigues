import React from "react";

import { Play } from "react-feather";
import "./styles.sass";

const YoutubeVideo = ({ video }) => {
  return (
    <div className="video">
      <a href={`https://youtube.com/watch?v=${video?.id.videoId}`}>
        <div className="thumb">
          <img
            src={video?.snippet.thumbnails.medium.url}
            alt={video?.snippet.channelTitle}
          />
          <Play className="icon" />
        </div>
        <div className="info">
          <span className="subtitle">#ÚltimoVídeo 📹</span>
          <span className="title">{video?.snippet.title}</span>
        </div>
      </a>
    </div>
  );
};

export default YoutubeVideo;
