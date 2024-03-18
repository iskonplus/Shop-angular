import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../types/card';

@Pipe({
  name: 'productsLength',
  standalone: true
})
export class ProductsLengthPipe implements PipeTransform {
  newCards!: Card[]

  transform(cards: Card[], search: string): number {
    this.newCards = cards.filter(card => {
      return card.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    })
    return this.newCards.length
  }


}
