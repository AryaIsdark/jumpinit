import "./App.css";
import Playlists from "./Playlists";
import { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";

const videos = [
  {
    name: "video1",
    url: "https://www.youtube.com/watch?v=edIK5SZYMZo",
    category: "hiit",
  },
  {
    name: "video2",
    url: "https://www.youtube.com/watch?v=BkS1-El_WlE",
    category: "chest",
  },
  {
    name: "video3",
    url: "https://www.youtube.com/watch?v=1skBf6h2ksI",
    category: "hiit",
  },
  {
    name: "video4",
    url: "https://www.youtube.com/watch?v=ml6cT4AZdqI",
    category: "hiit",
  },
  {
    name: "video5",
    url: "https://www.youtube.com/watch?v=2pLT-olgUJs",
    category: "abs",
  },
  {
    name: "video6",
    url: "https://www.youtube.com/watch?v=JEEG0hBNk3E",
    category: "abs",
  },
  {
    name: "video7",
    url: "https://www.youtube.com/watch?v=K56Z12XNQ5c",
    category: "pilates",
  },
];

function App() {
  const [activePlaylist, setActivePlaylist] = useState(videos);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOnPlaylistChange = (playlist) => {
    setActiveVideoIndex(0);
    setActivePlaylist(
      videos.filter((video) => video.category === playlist.category)
    );
  };

  const handleOnReady = () => {
    setIsPlaying(true);
  };

  return (
    <div className="container">
      <div className="video-container">
        {!!activePlaylist.length && (
          <>
            <VideoPlayer
              onReady={handleOnReady}
              playing={isPlaying}
              url={activePlaylist[activeVideoIndex].url}
            />
            <div className="controls">
              <div className="player-controls">
                <>
                  <button
                    disabled={activeVideoIndex === 0}
                    onClick={() => setActiveVideoIndex(activeVideoIndex - 1)}
                  >
                    &larr;
                  </button>
                  {isPlaying ? (
                    <button onClick={() => setIsPlaying(false)}>
                      &#10074; &#10074;
                    </button>
                  ) : (
                    <button onClick={() => setIsPlaying(true)}>&#9658;</button>
                  )}

                  <button
                    disabled={activeVideoIndex === activePlaylist.length - 1}
                    onClick={() => setActiveVideoIndex(activeVideoIndex + 1)}
                  >
                    &rarr;
                  </button>
                </>
              </div>
            </div>
          </>
        )}
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
