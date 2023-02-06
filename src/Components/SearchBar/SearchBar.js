import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term:''
    }
    this.search = this.search.bind(this);
    this.handgleTermChange = this.handgleTermChange.bind(this);
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  handgleTermChange(event) {
    this.setState({ term: event.target.value });
  }
  render() {
    return (
      <div className="SearchBar">
        <input
          onChange={this.handgleTermChange}
          placeholder="Enter A Song, Album, or Artist"
        />
        <button className="SearchButton">SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;
