import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ playing, url }) => {
  return (
    <ReactPlayer
      playing={playing}
      width="100%"
      height="100%"
      config={{
        youtube: {
          playerVars: {
            autoplay: 1,
            modestbranding: 0,
            controls: 0,
            mute: 1,
            showinfo: 0,
            enablejsapi: 1,
            widgetid: 1,
            rel: 0,
            playsinline: 1,
            start: 120,
          },
        },
      }}
      url={url}
    />
  );
};

export default VideoPlayer;
