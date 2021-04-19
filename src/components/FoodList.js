import React from 'react';
import FoodBox from './FoodBox';
import SearchBar from './SearchBar';
import foods from '../foods.json';

class FoodList extends React.Component {
  state = {
    foodList: [],
    originalList: [...foods],
    searchedFood: '',
  };

  handleAddFood = (foodName) => {
    const newList = [...this.state.foodList, foodName];
    this.setState({ foodList: newList });
  };

  handleSearch = (searchName) => {
    const newFoodList = { searchName };
  };

  componentDidUpdate = () => {
    const filteredArray = this.state.originalList.filter((food) =>
      food.name.toLowerCase().includes(this.state.searchedFood.toLowerCase())
    );
    this.setState({ foodList: filteredArray });
  };

  render() {
    return (
      <div className="container">
        <SearchBar />
        <div className="columns">
          <div className="column">
            {foods.map((x) => {
              return (
                <div>
                  <FoodBox
                    name={x.name}
                    calories={x.calories}
                    image={x.image}
                    onClick={this.handleAdd}
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
                      1 {x.name}={x.calories}
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
