import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, delay, tap } from 'rxjs';
import { Card } from "../types/card";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  urlProducts = "https://fakestoreapi.com/products";

  getProducts(): Observable<Card[]> {
    return this.http.get<Card[]>(this.urlProducts)
      .pipe(
        delay(300)
      )
  }
}


