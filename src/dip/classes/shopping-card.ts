import { Discount } from './discount';
import CartItem from './interfaces/cart-item';

export default class ShoppingCard {
  private readonly _items: CartItem[] = [];

  constructor(public readonly discount: Discount) {}

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

  public totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  public isEmpty(): boolean {
    return this._items.length === 0;
  }

  public clear(): number {
    console.log('Carrinho de compra foi limpo!!!');
    return (this._items.length = 0);
  }
}
