/*
Interface segregation principle(Principio da segregacao de interface) -
os clientes nao devem ser forcado a depender de type, interface ou menbros abstratas
que nao utilizam
*/

import Messaging from './services/messaging';
import Order from './classes/order';
import Persistency from './services/persistency';
import Product from './classes/product';
import ShoppingCard from './classes/shopping-card';
import { TenPercentDiscount, FitftyPercentDiscount, NoDiscount } from './classes/discount';
import { IndividualCustomer } from './classes/customer';

// const tenPercentDiscont = new TenPercentDiscount();
// const shoppingCard = new ShoppingCard(fiftyPercentDiscount);
// const shoppingCard = new ShoppingCard(tenPercentDiscont);
// const noDiscount = new NoDiscount();

const individualCustomer = new IndividualCustomer('Andre', 'Da Silva', '111.111.111-11');

const fiftyPercentDiscount = new FitftyPercentDiscount();
const shoppingCard = new ShoppingCard(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCard, messaging, persistency, individualCustomer);

shoppingCard.addItem(new Product('Camiseta', 49.9));

shoppingCard.addItem(new Product('Caderno', 9.9123));

shoppingCard.addItem(new Product('Lapis', 1.59));

console.log(shoppingCard.items);
console.log(shoppingCard.total());
console.log(shoppingCard.totalWithDiscount());
console.log(order.orderStatus);
order.chekout();
console.log(order.orderStatus);
