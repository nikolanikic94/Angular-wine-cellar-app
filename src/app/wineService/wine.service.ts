import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WineSearch } from '../model/wineSearch.model';
import { map } from 'rxjs/operators';
import { Wine } from '../model/wine.model';

@Injectable({
  providedIn: 'root',
})
export class WineService {
  url = 'http://localhost:3000/api/wines';
  constructor(private http: HttpClient) {}

  getAll(params): Observable<WineSearch> {
    let queryParams = {};
    if (params) {
      queryParams = {
        params: new HttpParams()
          .set('sort', params.sort || '')
          .set('sortDirection', params.sortDirection || '')
          .set('page', (params.page && params.page.toString()) || '')
          .set(
            'pageSize',
            (params.pageSize && params.pageSize.toString()) || ''
          )
          .set(
            'filter',
            (params.filter && JSON.stringify(params.filter)) || ''
          ),
      };
    }

    return this.http
      .get(this.url, queryParams)
      .pipe(map((x) => new WineSearch(x)));
  }

  getOneWine(id: number) {
    return this.http
      .get(`${this.url}/${id}`)
      .pipe(map((response) => new Wine(response)));
  }

  addWine(wine: Wine) {
    return this.http
      .post(this.url, wine)
      .pipe(map((response) => new Wine(response)));
  }

  removeWine(id: number) {
    return this.http
      .delete(`${this.url}/${id}`)
      .pipe(map((response) => new Wine(response)));
  }

  updateWine(editedWine: Wine): Observable<Wine> {
    return this.http
      .put(`${this.url}/${editedWine._id}`, editedWine)
      .pipe(map((response) => new Wine(response)));
  }
}
