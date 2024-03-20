import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { NgIf, CurrencyPipe, NgClass } from '@angular/common';
import { Card } from '../../types/card';
import { ProductInCartService } from '../../services/product-in-cart.service';
// import { YourCartComponent } from '../../pages/your-cart/your-cart.component';


@Component({
  selector: 'app-product-cards',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatButtonModule, NgIf, CurrencyPipe, NgClass],
  templateUrl: './product-cards.component.html',
  styleUrl: './product-cards.component.scss',
})

export class ProductCardsComponent implements OnInit {
  @Input() title?: string;
  @Input() card!: Card;
  @Input() iscart: boolean = false;
  isDitails: boolean = false;
  isAddToCart: boolean = false;
  color = 'accent';

  constructor(private productInCartService: ProductInCartService) { }
  ngOnInit(): void {

    if (this.productInCartService.productIdInCart.includes(this.card.id)) {
      this.isAddToCart = true;
    }
  }

  showDitails() {
    this.isDitails = !this.isDitails;
    !this.isDitails ? this.color = "accent" : this.color = "primary";
  }


  addToCard(productId: number) {
    if (!this.iscart) {
      this.isAddToCart = !this.isAddToCart;
    }
    this.productInCartService.addProductInCart(productId);

  }

}
