import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../types/card';
import { ProductInCartService } from './product-in-cart.service';

@Injectable({
  providedIn: 'root',
})
export class YourCartService {
  cards: Card[] = [];
  productIdInCart: number[] = [];
  subtotal: number = 0;

  constructor(
    private http: HttpClient,
    private productInCartService: ProductInCartService
  ) {}
  urlProducts = 'https://fakestoreapi.com/products';

  getProducts(): Observable<Card[]> {
    return this.http.get<Card[]>(this.urlProducts);
  }

  saveCards(products: Card[]) {
    this.productIdInCart = this.productInCartService.productIdInCart;
    this.subtotal = products.reduce((acc, card) => {
      this.productIdInCart.includes(card.id) && (acc += card.price);
      return acc;
    }, 0);
    return products.filter((card) => {
      return this.productIdInCart.includes(card.id);
    });
  }
}
