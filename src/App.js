import React from 'react';
import Hero from './components/sections/Hero/Hero';
import Menu from './components/sections/Menu/Menu';
import Passion from './components/sections/Passion/Passion';
import './index.css';

class App extends React.Component {
  links = [
    {
      name: 'Nasza Pasja',
      href: '/#nasza-pasja',
    },
    {
      name: 'Wyjątkowe składniki',
      href: '/#',
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

  render() {
    return (
      <>
        <Hero />
        <Menu links={this.links} />
        <Passion />
        <div id="ph" className="placeholder" />
      </>
    );
  }
}

export default App;
