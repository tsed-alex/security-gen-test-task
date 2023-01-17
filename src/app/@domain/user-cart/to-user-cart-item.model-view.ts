import {UserCartItemModelView} from "./user-cart-item.model-view";
import {UserCartSettingModel} from "./user-cart.setting-model";

export class ToUserCartItemModelView {
  constructor() {
  }

  public handle(responseModel: UserCartSettingModel): UserCartItemModelView {
    const result = new UserCartItemModelView();

    result.name = responseModel.name;
    result.price = responseModel.price;
    result.status = responseModel.status;
    // result.quantity = 1;
    result.subtotal_price = result.price;
    result.delivery = responseModel.delivery ?? 'No data';
    // ['select', 'name', 'status', 'date', 'price', 'quantity', 'subtotal_price'];

    return result
  }
}
