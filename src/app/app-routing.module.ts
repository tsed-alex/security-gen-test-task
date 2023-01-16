import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from "./pages/layout/layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'catalog',
        loadChildren: () => import('./pages/catalog/catalog.module').then((m) => m.CatalogModule),
      },
      {
        path: 'wishlist',
        loadChildren: () => import('./pages/wishlist/wishlist.module').then((m) => m.WishlistModule),
      },
      {
        path: 'cart',
        loadChildren: () => import('./pages/user-cart/user-cart.module').then((m) => m.UserCartModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
