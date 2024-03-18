import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';




@Component({
  selector: 'app-serch-products',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ],
  templateUrl: './serch-products.component.html',
  styleUrl: './serch-products.component.scss'
})
export class SerchProductsComponent {
  search!: string
  @Output() addEvent = new EventEmitter();

  zzz() {

    this.addEvent.emit(this.search);
  }




}
