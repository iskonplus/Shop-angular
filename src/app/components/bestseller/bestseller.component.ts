import { Component, Input } from '@angular/core';
import { ProductHeaderComponent } from "../product-header/product-header.component";
import { ProductCardsComponent } from "../product-cards/product-cards.component";
import { NgFor, NgIf } from '@angular/common';
import { Card } from '../../types/card';
import { SlicePipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
    selector: 'app-bestseller',
    standalone: true,
    templateUrl: './bestseller.component.html',
    styleUrl: './bestseller.component.scss',
    imports: [ProductHeaderComponent, ProductCardsComponent, NgFor,NgIf, SlicePipe, MatProgressSpinnerModule]
})
export class BestsellerComponent {
  @Input() cards?: Card[];
  @Input() isInProgress?: boolean;

  title: string = 'Bestsellers';
  quantity = 12;

  resiveClick($event: number) {
    this.quantity += $event;
  }

}
