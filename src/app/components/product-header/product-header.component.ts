import { Component, Input } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-header',
  standalone: true,
  imports: [MatDividerModule, MatButtonModule],
  templateUrl: './product-header.component.html',
  styleUrl: './product-header.component.scss'
})
export class ProductHeaderComponent {
  @Input() title?: string;
}
