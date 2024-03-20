import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../types/card';

@Pipe({
  name: 'includeId',
  standalone: true
})
export class IncludeIdPipe implements PipeTransform {

  transform(cards: Card[]=[], idProducts: number[] = []): Card[] {
    return cards.filter(card => {
      return idProducts.includes(card.id)
    });
  }

}
