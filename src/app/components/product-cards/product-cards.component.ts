import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { NgIf, CurrencyPipe, NgClass } from '@angular/common';
import { Card } from '../../types/card';


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
  isDitails: boolean = false;
  color = 'accent';

  showDitails() {
    this.isDitails = !this.isDitails;
    !this.isDitails ? this.color = "accent" : this.color = "primary";
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
