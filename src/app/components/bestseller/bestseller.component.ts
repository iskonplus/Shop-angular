import { Component, Input } from '@angular/core';
import { ProductHeaderComponent } from "../product-header/product-header.component";
import { ProductCardsComponent } from "../product-cards/product-cards.component";
import { NgFor } from '@angular/common';
import { Card } from '../../types/card';
import { SlicePipe } from '@angular/common';

@Component({
    selector: 'app-bestseller',
    standalone: true,
    templateUrl: './bestseller.component.html',
    styleUrl: './bestseller.component.scss',
    imports: [ProductHeaderComponent, ProductCardsComponent, NgFor, SlicePipe]
})
export class BestsellerComponent {
  @Input() cards?: Card[];

  title: string = 'Bestsellers';
  quantity = 12;

  resiveClick($event: number) {
    this.quantity += $event;
  }

}
