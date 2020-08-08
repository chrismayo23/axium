import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../data/product.model';
import { ProductData } from '../data/productData'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  product: ProductModel;
  Arr = Array;

  constructor() { }

  ngOnInit(): void {
    this.product = ProductData;
    console.log(this.product);
  }

  openReviewProductModal() {
    console.log('open modal')
  }
}
