import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../data/product.model';
import { ProductData } from '../data/productData';
import { ModalService } from '../modal/modal.service';
import { FormGroup, FormBuilder } from '@angular/forms';
// import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  product: ProductModel;
  Arr = Array;
  reviewForm: FormGroup;

  constructor(private fb: FormBuilder, private modalService: ModalService) {
    this.reviewForm = fb.group({
      title: [null],
      reviewContent: [null]
    });
  }

  ngOnInit(): void {
    this.product = ProductData;
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  onSubmit() {
    this.closeModal('custom-modal-1');
    console.log('Title:', this.reviewForm.value.title);
    // console.log('Stars:', this.reviewForm.value.stars);
    console.log('Review Content:', this.reviewForm.value.reviewContent);
  }
}
