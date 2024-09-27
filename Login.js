import React, {useState} from "react";
import TrackList from "./TrackList"

function SearchResult(){
    const [searchResult, setSearchResult] = useState([
        { id: 3, name: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', uri: 'spotify:track:2MbdDtCv5LUVjYy9RuGTgC' },
        { id: 4, name: 'Peaches', artist: 'Justin Bieber', album: 'Justice', uri: 'spotify:track:4iJyoBOLtHqaGxP12qzhQI' }
      ]);
    return (
      <div className="SearchResult">
        <h1>Track Listing</h1>
        <TrackList tracks={searchResult} />
        
      </div>
    );
  }

  export default SearchResult;
  
