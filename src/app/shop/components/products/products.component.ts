import { Component } from '@angular/core';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any = [];

  constructor(private readonly productService: ProductService) {
    this.productService.getAll().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });

  }
}
