import React from 'react';
import Hero from './components/sections/Hero/Hero';
import Menu from './components/sections/Menu/Menu';
import './index.css';

class App extends React.Component {
  links = [
    'Nasza Pasja',
    'Wyjątkowe składniki',
    'Menu',
    'Nasze lokale',
    'Kontakt',
  ];

  render() {
    return (
      <>
        <Hero />
        <Menu links={this.links} />
        <div className="placeholder" />
      </>
    );
  }
}

export default App;
