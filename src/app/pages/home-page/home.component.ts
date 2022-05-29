import { Component, OnInit } from '@angular/core';
import { Collection } from 'src/app/interfaces/collections';
import { CollectionsService } from 'src/app/services/collections/collections.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  collections:Collection[] = []

  constructor(private _service: CollectionsService) { }

  ngOnInit(): void {
    this._service.get().subscribe(collections => {    
      this.collections = collections.slice(0,5)
      this.collections.sort((x, y) => Number(y.budget) - Number(x.budget))
    })
  }
}
