import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-header',
  standalone: true,
  imports: [MatDividerModule, MatButtonModule, NgIf],
  templateUrl: './product-header.component.html',
  styleUrl: './product-header.component.scss'
})
export class ProductHeaderComponent implements OnInit{
  @Input() title?: string;
  @Output() addEvent = new EventEmitter();
  isShowMore = false;
  quantity: number | undefined;
  isTitleSale : boolean | undefined;

  ngOnInit(): void {
    this.isTitleSale = this.title === 'Our sale' || this.title === 'All products';
  }


  clickMore() {

    if (!this.isShowMore) {
      this.isShowMore = true;
      this.quantity = 4
    } else {
      this.isShowMore = false;
      this.quantity = -4;
    }
    this.addEvent.emit(this.quantity);
  }
}
