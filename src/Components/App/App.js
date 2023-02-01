// import logo from './logo.svg';
import "./App.css";
import SearchResults from "../SearchResults/SearchResults";
import SearchBar from "../SearchBar/SearchBar";
import Playlist from "../Playlist/Playlist";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: "SRName1", artist: "1", album: "1", id: "1" },
        { name: "SRName2", artist: "2", album: "2", id: "2" },
        { name: "SRName3", artist: "3", album: "3", id: "3" },
      ],
      playlistName: "Aaron's playlist",
      playlistTracks: [
        { name: "PLTName1", artist: "1", album: "1", id: "4" },
        { name: "PLTName2", artist: "2", album: "2", id: "5" },
        { name: "PLTName3", artist: "3", album: "3", id: "6" },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    // 如果已經有那首歌就不變動
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    //更改state只能在原app以及用setstate()
    this.setState({ playlistTracks: tracks });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
