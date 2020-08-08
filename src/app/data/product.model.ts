export interface ProductModel {
  name: string;
  descriptors: string[];
  descriptions: string[];
  reviews: Review[];
  img_one_url: string;
  img_two_url: string;
}

export interface Review {
  review_name: string;
  review_title: string;
  stars: number;
  review_date: string;
  review_description: string;
  img_photo_url: string;
}