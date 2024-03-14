import { Component, Input } from '@angular/core';
// import { MatCardLgImage, MatCardModule } from '@angular/material/card';
import { ProductCardsComponent } from "../product-cards/product-cards.component";
import { ProductHeaderComponent } from "../product-header/product-header.component";
import { NgFor, SlicePipe, NgIf} from '@angular/common';
import { Card } from '../../types/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';




@Component({
  selector: 'app-new-product',
  standalone: true,
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss',
  imports: [ ProductCardsComponent,
    ProductHeaderComponent, NgFor, SlicePipe, NgIf,
    MatProgressSpinnerModule
  ],
})
export class NewProductComponent {
  title: string = 'New products';
  quantity = 4;

  @Input() cards!: Card[]
  @Input() isInProgress!: boolean;
  constructor() {
  }

  resiveClick($event: number) {
    this.quantity += $event;
  }

  ngOnInit(): void {
  }
}


