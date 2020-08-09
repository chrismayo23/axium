import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../data/product.model';
import { ProductData } from '../data/productData';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  product: ProductModel;
  Arr = Array;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.product = ProductData;
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
