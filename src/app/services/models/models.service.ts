import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Model } from 'src/app/interfaces/models';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {
  private url = "http://localhost:3000/modelos"

  constructor(private http: HttpClient) { }

  get():Observable<Model[]> {
    return this.http.get<Model[]>(this.url)
  }

  getOne(id: string):Observable<any> {
    return this.http.get(`${this.url}/${id}`).pipe(take(1))
  }

  post(data: Model): Observable<any> {
    return this.http.post(this.url, data).pipe(take(1))
  }

  update(data: Model): Observable<any> {
    return this.http.put(`${this.url}/${data.id}`, data).pipe(take(1))
  }
 
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`).pipe(take(1))
  }

}
