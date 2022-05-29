import { Component, OnInit } from '@angular/core';
import { Collection } from 'src/app/interfaces/collections';
import { CollectionsService } from 'src/app/services/collections/collections.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  thead = {
    th1: "ColeçãoID",
    th2: "Nome da Coleção",
    th3: "Orçamento",
    th4: "Responsável",
  }
  collections:Collection[] = []

  constructor(private service: CollectionsService) {}

  ngOnInit(): void {
    this.service.get()
    .subscribe(collections => this.collections = collections)
  }
  
}
