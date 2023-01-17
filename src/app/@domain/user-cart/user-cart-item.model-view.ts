import {CartItemStatus} from "./types";

export class UserCartItemModelView {
  public name!: string;
  public status!: CartItemStatus;
  public delivery!: string;
  public price!: number;
  public quantity: number = 1;
  public subtotal_price!: number;

  public addOne() {
    this.quantity++;
    this.updateSubTotalPrice();
  }

  public removeOne() {
    if(this.quantity <= 1) {
      return
    }

    this.quantity--;
    this.updateSubTotalPrice();
  }

  private updateSubTotalPrice() {
    this.subtotal_price = this.price * this.quantity;
  }
}
