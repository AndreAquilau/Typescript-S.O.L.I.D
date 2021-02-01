export abstract class Discount {
  protected discount = 0;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class FitftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.5;

  calculate(price: number): number {
    return price - price * 0.1;
  }
}

export class NoDiscount extends Discount {
  calculate(price: number): number {
    return price;
  }
}
