import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProductCardsComponent } from "../product-cards/product-cards.component";
import { ProductHeaderComponent } from "../product-header/product-header.component";
import { NgFor, SlicePipe } from '@angular/common';
import { Card } from '../../types/card';



@Component({
  selector: 'app-new-product',
  standalone: true,
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss',
  imports: [MatCardModule, ProductCardsComponent,
    ProductHeaderComponent, NgFor, SlicePipe,
  ],
})
export class NewProductComponent {
  title: string = 'New products';
  quantity = 4

  @Input() cards?: Card[]
  constructor() {
  }

  resiveClick($event: number) {
    this.quantity += $event;
  }

  ngOnInit(): void {

  }
}


