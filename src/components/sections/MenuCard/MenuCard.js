import React from 'react';
import styles from './MenuCard.module.scss';
import SectionHeader from '../../partials/SectionHeader/SectionHeader';
import FoodOptions from './FoodOptions/FoodOptions';
import FoodList from './FoodList/FoodList';

class MenuCard extends React.Component {
  constructor(props) {
    super();
    this.state = {
      displayedPizza: [...props.pizza],
    };
  }

  filterMenu = (vegan, fish, spicy) => {
    let filtered = [...this.props.pizza];
    if (vegan) {
      filtered = filtered.filter((pizza) => pizza.pref.vege === vegan);
    }
    if (fish) {
      filtered = filtered.filter((pizza) => pizza.pref.fish === fish);
    }
    if (spicy) {
      filtered = filtered.filter((pizza) => pizza.pref.spicy === spicy);
    }
    this.setState({
      displayedPizza: filtered,
    });
  };

  render() {
    return (
      <>
        <SectionHeader
          head="Menu"
          subHead="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          id="menu"
          right
        />
        <FoodOptions filter={this.filterMenu} />
        <FoodList pizza={this.state.displayedPizza} />
      </>
    );
  }
}

export default MenuCard;
