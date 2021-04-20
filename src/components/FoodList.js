import React from 'react';
import FoodBox from './FoodBox';
import SearchBar from './SearchBar';
import foods from '../foods.json';

class FoodList extends React.Component {
  state = {
    foodList: [],
    originalList: [...foods],
    originalCopyList: [...foods],
    searchedFood: '',
  };

  handleAddFood = (food) => {
    const newList = [...this.state.foodList, food];
    this.setState({ foodList: newList });
  };

  handleSearch = (searchName) => {
    const newFoodList = { searchName };
  };

  handleChange = (event) => {
    const newList = this.state.originalCopyList.filter((x) => {
      return x.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    this.setState({
      [event.target.name]: event.target.value,
      originalList: newList,
    });
  };

  // componentDidUpdate = () => {
  //   const filteredArray = this.state.originalList.filter((food) =>
  //     food.name.toLowerCase().includes(this.state.searchedFood.toLowerCase())
  //   );
  //   this.setState({ foodList: filteredArray });
  // };

  render() {
    return (
      <div className="container">
        <div>
          <h1 className="title">IronNutrition</h1>
          <div>
            <input
              onChange={this.handleChange}
              type="text"
              className="input search-bar"
              name="searchedFood"
              placeholder="Search"
              value={this.state.name}
            />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            {this.state.originalList.map((x) => {
              return (
                <div>
                  <FoodBox
                    name={x.name}
                    calories={x.calories}
                    image={x.image}
                    onClick={this.handleAddFood}
                  />
                </div>
              );
            })}
          </div>
          <div className="column content">
            <div className="box">
              <h2 className="subtitle">Today's Food's</h2>
              <ul>
                {this.state.foodList.map((x) => {
                  return (
                    <li>
                      {x.quantity} {x.name}={x.calories}
                    </li>
                  );
                })}
              </ul>
              <strong>Total: 700 cal</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FoodList;
