import {CatalogComponent} from "./catalog.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CatalogRoutingModule} from "./catalog-routing.module";

@NgModule({
  declarations: [CatalogComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule
  ],
  providers: [],
})
export class CatalogModule {}
