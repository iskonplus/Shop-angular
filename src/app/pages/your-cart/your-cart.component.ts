import { Component, OnInit } from '@angular/core';
import { YourCartService } from '../../services/your-cart.service';
import { Card } from '../../types/card';
import { ProductCardsComponent } from '../../components/product-cards/product-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-your-cart',
  standalone: true,
  templateUrl: './your-cart.component.html',
  styleUrl: './your-cart.component.scss',
  providers: [YourCartService],
  imports: [ProductCardsComponent, HttpClientModule, CurrencyPipe],
})
export class YourCartComponent implements OnInit {
  title = 'Your cart';
  cards!: Card[];
  isInProgress!: boolean;
  iscart = true;

  constructor(public yourCartService: YourCartService) {}

  ngOnInit(): void {
    this.isInProgress = true;
    this.yourCartService.getProducts().subscribe((products) => {
      this.isInProgress = false;
      this.cards = this.yourCartService.saveCards(products);
    });
  }

  deleteCard() {
    this.cards = this.yourCartService.saveCards(this.cards);
  }
}
