import { Component } from '@angular/core';

import {MatCardModule} from '@angular/material/card'
import { ProductCardsComponent } from "../product-cards/product-cards.component";
import { ProductHeaderComponent } from "../product-header/product-header.component";

@Component({
    selector: 'app-new-product',
    standalone: true,
    templateUrl: './new-product.component.html',
    styleUrl: './new-product.component.scss',
    imports: [MatCardModule, ProductCardsComponent, ProductHeaderComponent]
})
export class NewProductComponent {

}
