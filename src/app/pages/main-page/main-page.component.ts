import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavComponent } from '../../components/nav/nav.component';
import { NewProductComponent } from '../../components/new-product/new-product.component';
import { BestsellerComponent } from '../../components/bestseller/bestseller.component';
import { ProductSaleComponent } from '../../components/product-sale/product-sale.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AppService } from '../../services/app.service';
import { Card } from '../../types/card';
import { tap } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HeaderComponent,
    MatSlideToggleModule,
    NavComponent,
    NewProductComponent,
    BestsellerComponent,
    ProductSaleComponent,
    FooterComponent,
    HttpClientModule,
    MatProgressSpinnerModule,
    NgIf,
  ],
  providers: [AppService],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  title = 'Shop-angular';
  cards: Card[] = [];
  isInProgress = false;

  constructor(private appService: AppService) {}

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
