import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PromosComponent } from './components/promos/promos.component';
import { ProductDetailComponent } from './components/product-detail/product-detail/product-detail.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ProductsComponent,
    CategoriesComponent,
    PromosComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ShopModule { }
