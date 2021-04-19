import React from 'react';

class SearchBar extends React.Component {
  state = {
    name: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <h1 className="title">IronNutrition</h1>
        <div>
          <input
            onChange={this.handleChange}
            type="text"
            className="input search-bar"
            name="search"
            placeholder="Search"
            value={this.state.name}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
