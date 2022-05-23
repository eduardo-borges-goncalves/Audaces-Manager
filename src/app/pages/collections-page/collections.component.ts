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

  routerLink = "/edit-collection/1" //tem um santo role aqui

  collections:Collection[] = []

  constructor(private service: CollectionsService) {
    this.getCollections()
   }

  ngOnInit(): void {
  }

  getCollections () {
    this.service.get().subscribe(collections => this.collections = collections)
  }
}
