import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserCartComponent} from "./user-cart.component";
import {UserCartRoutingModule} from "./user-cart-routing.module";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTableModule} from "@angular/material/table";
import {UserCartService} from "../../@domain/user-cart/user-cart.service";
import {CartDataSourceService} from "./services/cart-data-source.service";
import { StatusCellComponent } from './components/status-cell/status-cell.component';
import { QuantityCellComponent } from './components/quantity-cell/quantity-cell.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { UserCurrencyPipe } from './pipes/user-currency.pipe';
import {CurrencyService} from "./services/currency.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [UserCartComponent, StatusCellComponent, QuantityCellComponent, UserCurrencyPipe],
  imports: [
    CommonModule,
    UserCartRoutingModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [
    UserCartService,
    CartDataSourceService
  ]
})
export class UserCartModule { }
