import { Component } from '@angular/core';
import { ProductHeaderComponent } from "../product-header/product-header.component";
import { ProductCardsComponent } from "../product-cards/product-cards.component";

@Component({
    selector: 'app-bestseller',
    standalone: true,
    templateUrl: './bestseller.component.html',
    styleUrl: './bestseller.component.scss',
    imports: [ProductHeaderComponent, ProductCardsComponent]
})
export class BestsellerComponent {
  title : string = 'Bestsellers';
}
