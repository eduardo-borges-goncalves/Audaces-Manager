import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Collection } from 'src/app/interfaces/collections';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {
  private url = "http://localhost:3000/colecoes"

  constructor(private http: HttpClient) { }

  get():Observable<Collection[]> {
    return this.http.get<Collection[]>(this.url)
  }
}
