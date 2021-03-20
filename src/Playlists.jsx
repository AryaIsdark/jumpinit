import React, { useState } from "react";

const playlistItems = [
  { id: "1", category: "chest", icon: "chest.png" },
  { id: "2", category: "legs", icon: "legs.png" },
  { id: "3", category: "abs", icon: "abs.png" },
  { id: "4", category: "arms", icon: "arms.png" },
  { id: "5", category: "back", icon: "back.png" },
  { id: "6", category: "full body", icon: "full.png" },
  { id: "7", category: "hiit", icon: "hiit.png" },
  { id: "8", category: "pilates", icon: "pilates.png" },
];
const Playlists = ({ onChange, active }) => {
  const [activeItem, setActiveItem] = useState(active);

  const handleChange = (playlist) => {
    setActiveItem(playlist.category);
    onChange(playlist);
  };

  return (
    <>
      {playlistItems.map((playlist) => (
        <div
          key={playlist.id}
          className={`playlist-button ${
            playlist.category === activeItem && "active"
          }`}
          onClick={() => handleChange(playlist)}
        >
          {playlist.category}
        </div>
      ))}
    </>
  );
};

export default Playlists;
