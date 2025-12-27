
import { MenuItem } from './types';

export const PIZZA_MENU: MenuItem[] = [
  {
    id: 'p1',
    name: 'Margherita Stellaire',
    price: 3500,
    description: 'Tomates fraîches gorgées de soleil, basilic bio, mozzarella artisanale et huile d\'olive extra-vierge.',
    category: 'pizza',
    image: '/margherita.jpg'
  },
  {
    id: 'p2',
    name: 'Campione Galactique',
    price: 4500,
    description: 'Champignons frais, oignons rouges, poivrons croquants sur une pâte à la farine de blé naturel pétrie à la main.',
    category: 'pizza',
    image: '/campione.jpg'
  },
  {
    id: 'p3',
    name: 'BBQ Chicken Express',
    price: 5000,
    description: 'Poulet fermier grillé, piment naturel, poivrons frais et oignons caramélisés.',
    category: 'pizza',
    image: '/bbq.jpg'
  },
  {
    id: 'p4',
    name: 'Peperoni Orbite',
    price: 5000,
    description: 'Salami épicé de qualité, poivre noir concassé et sauce tomate maison aux herbes de Provence.',
    category: 'pizza',
    image: '/peperoni.jpg'
  },
  {
    id: 'p5',
    name: 'Cannibal Cosmos',
    price: 6000,
    description: 'Le festin suprême : bœuf, poulet et jambon sélectionnés, sublimés par des épices naturelles.',
    category: 'pizza',
    image: '/cannibal.jpg'
  }
];

export const DRINK_MENU: MenuItem[] = [
  {
    id: 'd1',
    name: 'Bissap de la Plage',
    price: 1000,
    description: 'Infusion naturelle d\'hibiscus, récoltée près d\'Adounko.',
    category: 'drink',
    image: '/bissap.jpg'
  },
  {
    id: 'd2',
    name: 'Gingembre Astral',
    price: 1000,
    description: 'Gingembre frais pressé pour une énergie pure et naturelle.',
    category: 'drink',
    image: '/gingembre.jpg'
  }
];

export const PIZZA_JOKES = [
  "Pourquoi les astronautes aiment-ils la pizza ? Parce qu'ils cherchent toujours la 'mozzarella stellaire' !",
  "Comment appelle-t-on une pizza qui fait du karaté ? Une pizza-chop !",
  "Quel est le point commun entre une pizza et un vaisseau spatial ? Si elles brûlent, c'est la panique !",
  "Pourquoi Pizzavivi livre si vite ? Parce qu'on traverse le pont de Togbin à la vitesse de la lumière !",
  "La pizza est-elle un fruit ? Non, mais chez nous, elle est le centre de l'univers !",
  "Quelle est la pizza préférée des aliens ? La 'Margherita' parce qu'elle a les couleurs de la vie !"
];

export const LOCATION_INFO = "📍 Adounko Kpevi, traversez le pont vers Pahou. Suivez l'odeur du feu de bois !";
export const ORDER_PHONE = '01 67 18 23 43';
