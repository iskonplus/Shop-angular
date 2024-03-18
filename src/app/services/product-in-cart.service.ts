import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductInCartService {
  productIdInCart: number[] = [];
  jsonProductIdInCart: any = '';

  constructor() { }

  cheackLocalstorage() {
    if (typeof localStorage !== 'undefined') {
      if (localStorage.hasOwnProperty('productIdInCart')) {
        this.jsonProductIdInCart = localStorage.getItem('productIdInCart');
        JSON.parse(this.jsonProductIdInCart).forEach((el: number) => {
          this.addProductInCart(el);
        });
      }
    } else {
      console.log('localStorage is not available.');
    }
  }

  addProductInCart(idProduct: number) {
    if (!this.productIdInCart.includes(idProduct)) {
      this.productIdInCart.push(idProduct);
    } else {
      this.productIdInCart.forEach((el, ind) => {
        el === idProduct && this.productIdInCart.splice(ind, 1);
      });
    }
    localStorage.setItem('productIdInCart', JSON.stringify(this.productIdInCart));
  }
}
