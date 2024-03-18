import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../types/card';

@Pipe({
  name: 'filterProducts',
  standalone: true
})
export class FilterProductsPipe implements PipeTransform {

  transform(cards: Card[], search: string): Card[] {
    return cards.filter(card => {
      return card.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())

    });
  }

}
