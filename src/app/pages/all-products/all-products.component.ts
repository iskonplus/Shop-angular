import { Component, OnInit } from '@angular/core';
import { ProductHeaderComponent } from "../../components/product-header/product-header.component";
import { ProductCardsComponent } from "../../components/product-cards/product-cards.component";
import { Card } from '../../types/card';
import { AppService } from '../../services/app.service';
import { HttpClientModule } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { tap } from 'rxjs';

@Component({
  selector: 'app-all-products',
    standalone: true,
    templateUrl: './all-products.component.html',
    styleUrl: './all-products.component.scss',
    providers: [AppService],
    imports: [HttpClientModule, NgFor, NgIf, MatProgressBarModule, ProductHeaderComponent, ProductCardsComponent]
})
export class AllProductsComponent implements OnInit {
  title = 'All products';
  cards?: Card[];
  isInProgress!: boolean;

  constructor(private appService : AppService){}

  ngOnInit(): void {
    this.isInProgress = true;
    this.appService
      .getProducts()
      .pipe(
        tap((products) => {
          this.isInProgress = false;
          this.cards = products;
        })
      )
      .subscribe();
  }
}
