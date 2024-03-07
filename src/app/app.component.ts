import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { HttpClientModule } from "@angular/common/http";
// import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavComponent } from "./components/nav/nav.component";
import { NewProductComponent } from "./components/new-product/new-product.component";
import { BestsellerComponent } from "./components/bestseller/bestseller.component";
import { ProductSaleComponent } from "./components/product-sale/product-sale.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AppService } from './services/app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [HeaderComponent, MatSlideToggleModule, NavComponent,
    NewProductComponent, BestsellerComponent, ProductSaleComponent,
    FooterComponent, HttpClientModule],
  providers: [AppService]
})

export class AppComponent {
  title = 'Shop-angular';
  url = "https://fakerapi.it/api/v1/products?_quantity=30&_taxes=1&_categories_type=uuid";

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getProducts(this.url).subscribe({
      next: (data: any) => console.log(data)
    });

  }

}
