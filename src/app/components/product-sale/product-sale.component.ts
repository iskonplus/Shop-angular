import { Component, OnInit, Input } from '@angular/core';
import { ProductCardsComponent } from "../product-cards/product-cards.component";
import { ProductHeaderComponent } from "../product-header/product-header.component";
import { Card } from '../../types/card';
import { NgFor } from '@angular/common';
import { SlicePipe } from '@angular/common';




@Component({
    selector: 'app-product-sale',
    standalone: true,
    templateUrl: './product-sale.component.html',
    styleUrl: './product-sale.component.scss',
    imports: [ProductCardsComponent, ProductHeaderComponent, NgFor, SlicePipe]
})
export class ProductSaleComponent implements OnInit{
  title : string = 'Our sale';
  @Input() cards?: Card[];

  ngOnInit(): void {
  }
}
