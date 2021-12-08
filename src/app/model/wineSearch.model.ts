import { Wine } from './wine.model';

export class WineSearch {
  count: number;
  results: Wine[];

  constructor(obj?: any) {
    this.count = (obj && obj.count) || 0;
    this.results = (obj && obj.results.map((wine) => new Wine(wine))) || [];
  }
}
