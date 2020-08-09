import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../data/product.model';
import { ProductData } from '../data/productData';
import { ModalService } from '../modal/modal.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  product: ProductModel;
  Arr = Array;
  reviewForm: FormGroup;
  displayWarning = false;;

  constructor(private fb: FormBuilder, private modalService: ModalService) {
    this.reviewForm = fb.group({
      title: [null, Validators.required],
      rating: [null, Validators.required],
      reviewContent: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.product = ProductData;
    this.reviewForm.valueChanges.subscribe(e => {
      if (this.reviewForm.valid) {
        this.displayWarning = false;
      }
    })
  }

  openModal(id: string) {
    this.reviewForm.reset()
    this.displayWarning = false;
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  onSubmit() {
    if (this.reviewForm.valid) {
      this.closeModal('custom-modal-1');
      console.log('Title:', this.reviewForm.value.title);
      console.log('Rating:', this.reviewForm.value.rating);
      console.log('Review Content:', this.reviewForm.value.reviewContent);
    } else {
      this.displayWarning = true;
    }
  }
}
