import { OrderStatus } from './interfaces/order-status';
import Messaging from '../services/messaging';
import Persistency from '../services/persistency';
import ShoppingCard from './shopping-card';
import { CustomerOrder } from './interfaces/customer-protocol';

// Class Alto nivel
export default class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    // dependencia e baixo nivel
    private readonly cart: ShoppingCard,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  public chekout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu Carrinho esta vazio');
      return;
    }
    this._orderStatus = 'closed';

    this.messaging.sendMessage(`Seu pedido com total R$${this.cart.totalWithDiscount()} foi recebido.`);
    this.persistency.saveOrder();
    this.cart.clear();
    console.log(`O Cliente e ${this.customer.getName()} ${this.customer.getIDN()}`);
  }
}
