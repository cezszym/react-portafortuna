import React from 'react';
import Hero from './components/sections/Hero/Hero';
import Menu from './components/sections/Menu/Menu';
import Passion from './components/sections/Passion/Passion';
import ProductList from './components/sections/ProuductList/ProuctList';
import mozarella from './assets/images/products/mozarella.jpg';
import parmegiano from './assets/images/products/parmegiano.jpg';
import prosciutto from './assets/images/products/prosciutto.jpg';
import salame from './assets/images/products/salame.jpg';
import './index.css';

class App extends React.Component {
  links = [
    {
      name: 'Nasza Pasja',
      href: '/#nasza-pasja',
    },
    {
      name: 'Wyjątkowe składniki',
      href: '/#składniki',
    },
    {
      name: 'Menu',
      href: '/#',
    },
    {
      name: 'Nasze lokale',
      href: '/#',
    },
    {
      name: 'Kontakt',
      href: '/#',
    },
  ];

  products = [
    {
      name: 'Mozzarella di Buffalo',
      desc:
        'Vulputate odio ut enim blandit volutpat maecenas volutpat Vulputate odio ut enim blandit volutpat maecenas volutpat',
      image: mozarella,
    },
    {
      name: 'Parmigiano Reggiano',
      desc:
        ' Molestie ac feugiat sed lectus vestibulum matti Vulputate odio ut enim blandit volutpat maecenas volutpat Vulputate odio ut enim blandit volutpat maecenas volutpat',
      image: parmegiano,
    },
    {
      name: 'Prosciutto di Parma',
      desc: 'Vulputate odio ut enim blandit volutpat maecenas volutpat',
      image: prosciutto,
    },
    {
      name: 'Spinata Piccante',
      desc:
        'Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Vulputate odio ut enim blandit volutpat maecenas volutpat Vulputate odio ut enim blandit volutpat maecenas volutpat',
      image: salame,
    },
  ];

  render() {
    return (
      <>
        <Hero />
        <Menu links={this.links} />
        <Passion />
        <ProductList products={this.products} />
        <div id="ph" className="placeholder" />
      </>
    );
  }
}

export default App;
