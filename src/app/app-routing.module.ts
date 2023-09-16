import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { ProductsComponent } from './shop/components/products/products.component';
import { ProductListInfoComponent } from './shopping-cart/product-list-info/product-list-info.component';
import { RegistrationFormComponent } from './authentication/components/registration-form/registration-form.component';
import { LogoutComponent } from './authentication/components/logout/logout.component';
import { CategoriesComponent } from './shop/components/categories/categories.component';
import { PromosComponent } from './shop/components/promos/promos.component';
import { ProductDetailComponent } from './shop/components/product-detail/product-detail/product-detail.component';
import { ContactInfoComponent } from './shopping-cart/contact-info/contact-info.component';
import { DeliveryInfoComponent } from './shopping-cart/delivery-info/delivery-info.component';
import { PaymentInfoComponent } from './shopping-cart/payment-info/payment-info.component';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registration-form',
        component: RegistrationFormComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      }
    ]
  },
  {
    path: 'eshop',
    children: [{
      path: 'product-list',
      component: ProductsComponent,
    }, {
      path: 'menu',
      component: CategoriesComponent
    }, {
      path: 'product-detail',
      component: ProductDetailComponent
    },
    {
      path: 'promos',
      component: PromosComponent
    }]
  },
  {
    path: 'shopping-cart',
    children: [
      {
        path: 'product-list-info',
        component: ProductListInfoComponent
      }, {
        path: 'contact-info',
        component: ContactInfoComponent
      }, {
        path: 'delivery-info',
        component: DeliveryInfoComponent
      }, {
        path: 'payment-info',
        component: PaymentInfoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
