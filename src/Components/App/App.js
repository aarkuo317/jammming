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
    this.removeTrack = this.removeTrack.bind(this);
    this.UpdateplaylistName = this.UpdateplaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  // 新增歌曲
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
  // 刪除歌曲
  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);
    this.setState({ playlistTracks: tracks });
  }

  //修改歌單名稱
  UpdateplaylistName(name) {
    this.setState({ playlistName: name });
  }

  // 儲存歌單
  savePlaylist() {
    // alert("this method is linked to the button correctly!");
    const trackURIs = this.state.playlistTracks.map((track) => track.uri);
  }
  // 找歌
  search(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.UpdateplaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
