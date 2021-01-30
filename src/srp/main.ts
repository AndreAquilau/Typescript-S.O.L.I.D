import Messaging from './services/messaging';
import Order from './entities/order';
import Persistency from './services/persistency';
import Product from './entities/product';
import ShoppingCard from './entities/shopping-card';

const shoppingCard = new ShoppingCard();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCard, messaging, persistency);

shoppingCard.addItem(new Product('Camiseta', 49.9));

shoppingCard.addItem(new Product('Caderno', 9.9123));

shoppingCard.addItem(new Product('Lapis', 1.59));

order.chekout();
