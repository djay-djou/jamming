import React from 'react';
import PlaylistTrack from "./PlaylistTrack"

const Playlist = ({ name, tracks, onRemove, onNameChange, onSave }) => {
  return (
    <div>
      <input 
        value={name} 
        onChange={e => onNameChange(e.target.value)} 
      />
      {tracks.map(track => (
        <PlaylistTrack key={track.id} track={track} onRemove={onRemove} />
      ))}
      <button onClick={onSave}>Save to Spotify</button>
    </div>
  );
};

export default Playlist;


