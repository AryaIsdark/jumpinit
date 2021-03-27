import "./App.css";
import Playlists from "./Playlists";
import { useState } from "react";

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

  return (
    <div className="container">
      <div className="video-container">
        {!!activePlaylist.length && (
          <>
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              src={`https://www.youtube.com/embed/${activePlaylist[activeVideoIndex].url}?enablejsapi=1&autoplay=1&mute=1&iv_load_policy=3&modestbranding=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </>
        )}
        <div className="controls">
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
            </>
          </div>
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
