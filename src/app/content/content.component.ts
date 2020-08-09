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
  checked_5: boolean;
  checked_45: boolean;
  checked_4: boolean;
  checked_35: boolean;
  checked_3: boolean;
  checked_25: boolean;
  checked_2: boolean;
  checked_15: boolean;
  checked_1: boolean;
  checked_05: boolean;
  checked_0: boolean;

  constructor(private fb: FormBuilder, private modalService: ModalService) {
    this.reviewForm = fb.group({
      title: [null],
      rating: [null],
      reviewContent: [null]
    });
  }

  ngOnInit(): void {
    this.product = ProductData;
  }

  openModal(id: string) {
    this.reviewForm.reset()
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  onSubmit() {
    this.closeModal('custom-modal-1');
    console.log('Title:', this.reviewForm.value.title);
    console.log('Rating:', this.reviewForm.value.rating);
    console.log('Review Content:', this.reviewForm.value.reviewContent);
  }
}
