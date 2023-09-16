import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListInfoComponent } from './product-list-info/product-list-info.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { DeliveryInfoComponent } from './delivery-info/delivery-info.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';



@NgModule({
  declarations: [
    ProductListInfoComponent,
    ContactInfoComponent,
    DeliveryInfoComponent,
    PaymentInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShoppingCartModule { }
