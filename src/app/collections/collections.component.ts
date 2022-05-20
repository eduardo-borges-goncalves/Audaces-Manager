import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
