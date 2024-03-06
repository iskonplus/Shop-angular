import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-product-cards',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatButtonModule],
  templateUrl: './product-cards.component.html',
  styleUrl: './product-cards.component.scss'
})
export class ProductCardsComponent {

}
