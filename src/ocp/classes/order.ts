import { OrderStatus } from './interfaces/order-status';
import Messaging from '../services/messaging';
import Persistency from '../services/persistency';
import ShoppingCard from './shopping-card';

export default class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCard,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
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
  }
}
