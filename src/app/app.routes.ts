import { Routes } from '@angular/router';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { YourCartComponent } from './pages/your-cart/your-cart.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

export const routes: Routes = [
 { path:'', component: MainPageComponent },
 { path:'all-products', component: AllProductsComponent },
 { path:'your-cart', component: YourCartComponent },
];
