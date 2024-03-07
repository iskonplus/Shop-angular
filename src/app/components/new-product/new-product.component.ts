import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from '@angular/material/card';
import { ProductCardsComponent } from "../product-cards/product-cards.component";
import { ProductHeaderComponent } from "../product-header/product-header.component";
import { NewProductService } from '../../services/new-product.service'

@Component({
  selector: 'app-new-product',
  standalone: true,
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss',
  imports: [MatCardModule, ProductCardsComponent, ProductHeaderComponent, HttpClientModule],
  // providers: [NewProductService]
})
export class NewProductComponent implements OnInit {
  title: string = 'New products';

  constructor(private newProductService: NewProductService) { }

  ngOnInit(): void {
    this.newProductService.zzz();
  }

}


