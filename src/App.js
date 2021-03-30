import React from 'react';
import Hero from './components/sections/Hero/Hero';
import Menu from './components/sections/Menu/Menu';
import Passion from './components/sections/Passion/Passion';
import ProductList from './components/sections/ProuductList/ProuctList';
import MenuCard from './components/sections/MenuCard/MenuCard';
import './index.css';
import { links, products } from './data/data';

class App extends React.Component {
  render() {
    return (
      <>
        <Hero />
        <Menu links={links} />
        <Passion />
        <ProductList products={products} />
        <MenuCard />
        <div id="ph" className="placeholder" />
      </>
    );
  }
}

export default App;
