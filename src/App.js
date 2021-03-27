import "./App.css";
import Playlists from "./Playlists";
import { useState } from "react";
import YouTube from "@u-wave/react-youtube";

const videos = [
  {
    name: "video1",
    url: "nOQpD8aDJeI",
    category: "hiit",
  },
  {
    name: "video2",
    url: "BkS1-El_WlE",
    category: "chest",
  },
  {
    name: "video3",
    url: "1skBf6h2ksI",
    category: "hiit",
  },
  {
    name: "video4",
    url: "ml6cT4AZdqI",
    category: "hiit",
  },
  {
    name: "video5",
    url: "2pLT-olgUJs",
    category: "abs",
  },
  {
    name: "video6",
    url: "JEEG0hBNk3E",
    category: "abs",
  },
  {
    name: "video7",
    url: "K56Z12XNQ5c",
    category: "pilates",
  },
];
function App() {
  const [activePlaylist, setActivePlaylist] = useState(videos);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const handleOnPlaylistChange = (playlist) => {
    setActiveVideoIndex(0);
    setActivePlaylist(
      videos.filter((video) => video.category === playlist.category)
    );
  };

  const nextVideo = activeVideoIndex + 1;

  const handleOnVideoEnd = () => {
    setActiveVideoIndex(activeVideoIndex + 1);
  };

  return (
    <div className="container">
      <div className="video-container">
        {!!activePlaylist.length && (
          <>
            <YouTube
              width="100%"
              height="600px"
              muted={true}
              showInfo={false}
              autoplay={true}
              showCaptions={false}
              allowFullscreen={true}
              annotations={false}
              modestBranding={false}
              startSeconds={40}
              showRelatedVideos={false}
              onEnd={handleOnVideoEnd}
              video={activePlaylist[activeVideoIndex].url}
            />
          </>
        )}
        <div className="controls">
          {activePlaylist.length > 1 && (
            <div className="player-controls">
              <>
                <div>
                  <button
                    disabled={activeVideoIndex === 0}
                    onClick={() => setActiveVideoIndex(activeVideoIndex - 1)}
                  >
                    &lt;
                  </button>
                  <button
                    disabled={activeVideoIndex === activePlaylist.length - 1}
                    onClick={() => setActiveVideoIndex(activeVideoIndex + 1)}
                  >
                    &gt;
                  </button>
                </div>
                {!!activePlaylist[nextVideo] && (
                  <div className="up-next">
                    <div>
                      <img
                        width={150}
                        alt={"next-video"}
                        src={`https://img.youtube.com/vi/${activePlaylist[nextVideo].url}/0.jpg`}
                      />
                    </div>
                    {activePlaylist[nextVideo].name}
                  </div>
                )}
              </>
            </div>
          )}
        </div>
      </div>
      <div className="playlist">
        <Playlists
          onChange={handleOnPlaylistChange}
          active={activePlaylist[0]?.category || ""}
        />
      </div>
    </div>
  );
}

export default App;
