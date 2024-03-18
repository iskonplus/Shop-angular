import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { ProductInCartService } from '../../services/product-in-cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule],
})
export class NavComponent implements OnInit {
  productIdInCart: number[] | undefined;

  constructor(private productInCartService: ProductInCartService) {
    this.productIdInCart = this.productInCartService.productIdInCart;
  }

  ngOnInit(): void {
    this.productInCartService.cheackLocalstorage();
  }
}
