import { Component } from '@angular/core';
import { ProductCardsComponent } from "../product-cards/product-cards.component";
import { ProductHeaderComponent } from "../product-header/product-header.component";

@Component({
    selector: 'app-product-sale',
    standalone: true,
    templateUrl: './product-sale.component.html',
    styleUrl: './product-sale.component.scss',
    imports: [ProductCardsComponent, ProductHeaderComponent]
})
export class ProductSaleComponent {
  title : string = 'Our sale';
}
