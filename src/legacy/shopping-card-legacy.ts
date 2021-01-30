type CartItem = {
  name: string;
  price: number;
};

type OrderStatus = 'open' | 'closed';

export default class ShoppingCardLegacy {
  private readonly _items: CartItem[] = [];

  private _orderStatus: OrderStatus = 'open';

  public addItem(product: CartItem): void {
    this._items.push(product);
  }

  public removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  public total(): number {
    return Number(
      this._items
        .reduce((value, item) => {
          return value + item.price;
        }, 0)
        .toFixed(2),
    );
  }

  public chekout(): void {
    if (this.isEmpty()) {
      console.log('Seu Carrinho esta vazio');
      return;
    }
    this._orderStatus = 'closed';

    ShoppingCardLegacy.sendMessage(`Seu pedido com total R$${this.total()} foi recebido.`);
    ShoppingCardLegacy.saveOrder();
    this.clear();
  }

  public isEmpty(): boolean {
    return this._items.length === 0;
  }

  public static sendMessage(msg: string): void {
    console.log(`Messagem enviada ${msg}`);
  }

  public static saveOrder(): void {
    console.log(`Pedido salvo com sucesso...`);
  }

  public clear(): number {
    console.log('Carrinho de compra foi limpo!!!');
    return (this._items.length = 0);
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }
}

const shoppingCard = new ShoppingCardLegacy();

shoppingCard.addItem({
  name: 'Camiseta',
  price: 49.9,
});

shoppingCard.addItem({
  name: 'Caderno',
  price: 9.9123,
});

shoppingCard.addItem({
  name: 'Lapis',
  price: 1.59,
});

// shoppingCard.items[0] = {name: 'hacker', price: 99};
// Error propetie readonly Readonly<CartItem[]>

console.log(shoppingCard.orderStatus);
console.log(shoppingCard.total());
shoppingCard.chekout();
console.log(shoppingCard.orderStatus);
