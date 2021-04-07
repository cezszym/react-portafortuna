import React from 'react';
import styles from './MenuCard.module.scss';
import SectionHeader from '../../partials/SectionHeader/SectionHeader';
import FoodOptions from './FoodOptions/FoodOptions';
import FoodList from './FoodList/FoodList';

const MenuCard = ({ pizza }) => (
  <>
    <SectionHeader
      head="Menu"
      subHead="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      id="menu"
      right
    />
    <FoodOptions />
    <FoodList pizza={pizza} />
  </>
);

export default MenuCard;
