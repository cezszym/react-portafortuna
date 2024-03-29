import mozarella from '../assets/images/products/mozarella.jpg';
import parmegiano from '../assets/images/products/parmegiano.jpg';
import prosciutto from '../assets/images/products/prosciutto.jpg';
import salame from '../assets/images/products/salame.jpg';
import krakow from '../assets/images/krakow.jpg';
import lublin from '../assets/images/lublin.jpg';
import wroclaw from '../assets/images/wroclaw.jpg';

import mozarellaWebp from '../assets/images/products/mozarella.webp';
import parmegianoWebp from '../assets/images/products/parmegiano.webp';
import prosciuttoWebp from '../assets/images/products/prosciutto.webp';
import salameWebp from '../assets/images/products/salame.webp';

export const links = [
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
    href: '/#menu',
  },
  {
    name: 'Nasze lokale',
    href: '/#nasze-lokale',
  },
  {
    name: 'Kontakt',
    href: '/#kontakt',
  },
];

export const products = [
  {
    name: 'Mozzarella di Buffalo',
    desc: 'Vulputate odio ut enim blandit volutpat maecenas volutpat Vulputate odio ut enim blandit volutpat maecenas volutpat',
    image: { jpg: mozarella, webp: mozarellaWebp },
  },
  {
    name: 'Parmigiano Reggiano',
    desc: ' Molestie ac feugiat sed lectus vestibulum matti Vulputate odio ut enim blandit volutpat maecenas volutpat Vulputate odio ut enim blandit volutpat maecenas volutpat',
    image: { jpg: parmegiano, webp: parmegianoWebp },
  },
  {
    name: 'Prosciutto di Parma',
    desc: 'Vulputate odio ut enim blandit volutpat maecenas volutpat',
    image: { jpg: prosciutto, webp: prosciuttoWebp },
  },
  {
    name: 'Spinata Piccante',
    desc: 'Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Vulputate odio ut enim blandit volutpat maecenas volutpat Vulputate odio ut enim blandit volutpat maecenas volutpat',
    image: { jpg: salame, webp: salameWebp },
  },
];

export const pizza = [
  {
    name: 'Margaritha',
    topings: 'sos pomidorowy, Mozzarella di Buffalo',
    pref: {
      vege: true,
      fish: false,
      spicy: false,
    },
    smallPrice: 20,
    bigPrice: 24,
  },
  {
    name: 'Fresca',
    topings: 'sos pomidorowy, Mozzarella di Buffalo,  świeże pomidory, rukola',
    pref: {
      vege: true,
      fish: false,
      spicy: false,
    },
    smallPrice: 21,
    bigPrice: 25,
  },
  {
    name: 'Salame',
    topings: 'sos pomidorowy, Mozzarella di Buffalo, Spinata Picante, ser feta',
    pref: {
      vege: false,
      fish: false,
      spicy: false,
    },
    smallPrice: 20,
    bigPrice: 24,
  },
  {
    name: 'Diavola',
    topings:
      'sos pomidorowy, Mozzarella di Buffalo, Spinata Picante, papryka pepperoni, Parmigiano Reggiano',
    pref: {
      vege: false,
      fish: false,
      spicy: true,
    },
    smallPrice: 25,
    bigPrice: 31,
  },
  {
    name: 'Tuna',
    topings:
      'sos pomidorowy, Mozzarella di Buffalo, tuńczyk, kapary, zielone oliwki',
    pref: {
      vege: false,
      fish: true,
      spicy: false,
    },
    smallPrice: 22,
    bigPrice: 28,
  },
  {
    name: 'Fiori',
    topings:
      'sos pomidorowy, Mozzarella di Buffalo, sardynki, chillie, papryka marynowana, pieczarki',
    pref: {
      vege: false,
      fish: true,
      spicy: true,
    },
    smallPrice: 24,
    bigPrice: 30,
  },
];

export const locationsData = {
  krakow: {
    name: 'Kraków',
    img: krakow,
    street: 'Długa 1',
    mail: 'porta.krakow@mail.com',
    phone: '444 123 552',
    googleMapsLink:
      'https://maps.google.com/maps?q=krakow%20d%C5%82uga%201&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  lublin: {
    name: 'Lublin',
    img: lublin,
    street: 'Ruska 12',
    mail: 'porta.lublin@mail.com',
    phone: '555 123 552',
    googleMapsLink:
      'https://maps.google.com/maps?q=Ruska%2012,%20Lubli&t=&z=13&ie=UTF8&iwloc=&output=embed',
  },
  wroclaw: {
    name: 'Wrocław',
    img: wroclaw,
    street: 'Warszawska 44',
    mail: 'porta.wroclaw@mail.com',
    phone: '888 123 552',
    googleMapsLink:
      'https://maps.google.com/maps?q=Warszawska%2044,%20Wroc%C5%82aw&t=&z=13&ie=UTF8&iwloc=&output=embed',
  },
};
