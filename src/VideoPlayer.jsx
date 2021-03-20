import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ playing, url, onReady }) => {
  return (
    <ReactPlayer
      onReady={onReady}
      controls={true}
      playing={playing}
      width="100%"
      height="100%"
      config={{
        youtube: {
          playerVars: {
            modestbranding: 0,
            controls: 0,
            showinfo: 0,
            enablejsapi: 1,
            widgetid: 1,
            rel: 0,
            playsinline: 1,
            start: 40,
          },
        },
      }}
      url={url}
    />
  );
};

export default VideoPlayer;
