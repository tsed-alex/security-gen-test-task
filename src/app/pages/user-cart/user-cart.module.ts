import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserCartComponent} from "./user-cart.component";
import {UserCartRoutingModule} from "./user-cart-routing.module";



@NgModule({
  declarations: [UserCartComponent],
  imports: [
    CommonModule,
    UserCartRoutingModule
  ]
})
export class UserCartModule { }
