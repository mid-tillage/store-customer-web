import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = [];

  constructor(private readonly productService: ProductService) {
    console.log('product service called');
    this.productService.getAll().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }

  ngOnInit(): void {
  }
}
