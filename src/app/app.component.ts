import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
// import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavComponent } from "./components/nav/nav.component";
import { NewProductComponent } from "./components/new-product/new-product.component";
import { BestsellerComponent } from "./components/bestseller/bestseller.component";
import { ProductSaleComponent } from "./components/product-sale/product-sale.component";
import { FooterComponent } from "./components/footer/footer.component";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true,
    imports: [HeaderComponent, MatSlideToggleModule, NavComponent, NewProductComponent, BestsellerComponent, ProductSaleComponent, FooterComponent]
})

export class AppComponent {
  title = 'Shop-angular';

}
