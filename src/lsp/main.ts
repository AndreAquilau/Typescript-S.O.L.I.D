import Messaging from './services/messaging';
import Order from './classes/order';
import Persistency from './services/persistency';
import Product from './classes/product';
import ShoppingCard from './classes/shopping-card';
import { TenPercentDiscount, FitftyPercentDiscount, NoDiscount } from './classes/discount';

// const tenPercentDiscont = new TenPercentDiscount();
// const shoppingCard = new ShoppingCard(fiftyPercentDiscount);
// const shoppingCard = new ShoppingCard(tenPercentDiscont);
// const noDiscount = new NoDiscount();

const fiftyPercentDiscount = new FitftyPercentDiscount();
const shoppingCard = new ShoppingCard(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCard, messaging, persistency);

shoppingCard.addItem(new Product('Camiseta', 49.9));

shoppingCard.addItem(new Product('Caderno', 9.9123));

shoppingCard.addItem(new Product('Lapis', 1.59));

console.log(shoppingCard.items);
console.log(shoppingCard.total());
console.log(shoppingCard.totalWithDiscount());
console.log(order.orderStatus);
order.chekout();
console.log(order.orderStatus);
