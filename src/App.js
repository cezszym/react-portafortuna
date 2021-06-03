import React from 'react';
import Hero from './components/sections/Hero/Hero';
import Menu from './components/sections/Menu/Menu';
import Passion from './components/sections/Passion/Passion';
import ProductList from './components/sections/ProuductList/ProuctList';
import MenuCard from './components/sections/MenuCard/MenuCard';
import './index.scss';
import { links, products, pizza } from './data/data';
import Locations from './components/sections/Locations/Locations';

class App extends React.Component {
  render() {
    return (
      <>
        <Hero />
        <Menu links={links} />
        <Passion />
        <ProductList products={products} />
        <MenuCard pizza={pizza} />
        <Locations />
        <div id="ph" className="placeholder" />
      </>
    );
  }
}

export default App;
