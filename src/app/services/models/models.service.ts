import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Models } from 'src/app/interfaces/models';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {
  private url = "http://localhost:3000/modelos"

  constructor(private http: HttpClient) { }

  get():Observable<Models[]> {
    return this.http.get<Models[]>(this.url)
  }
}
