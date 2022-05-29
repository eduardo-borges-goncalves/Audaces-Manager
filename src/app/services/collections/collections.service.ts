import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
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

  getOne(id: string):Observable<any> {
    return this.http.get(`${this.url}/${id}`).pipe(take(1))
  }

  post(data: Collection): Observable<any> {
    return this.http.post(this.url, data).pipe(take(1))
  }

  update(data: Collection): Observable<any> {
    return this.http.put(`${this.url}/${data.id}`, data).pipe(take(1))
  }
 
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`).pipe(take(1))
  }
}
