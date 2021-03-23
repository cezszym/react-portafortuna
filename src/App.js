import React from 'react';
import SectionHeader from './components/partials/SectionHeader/SectionHeader';
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
        <SectionHeader
          head="Wyjątkowe składniki"
          subHead="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum matti"
        />
        <div id="ph" className="placeholder" />
      </>
    );
  }
}

export default App;
