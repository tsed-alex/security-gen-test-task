import {CartItemStatus} from "./types";

export class UserCartSettingModel {
  public id!: string;
  public name!: string;
  public status!: CartItemStatus;
  public delivery!: string | null;
  public category!: string;
  public price!: number;
}
