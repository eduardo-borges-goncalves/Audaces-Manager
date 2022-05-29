import { Component, Input, OnInit } from '@angular/core';
import { Collection } from 'src/app/interfaces/collections';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  thead = {
    th1: "ColeçãoID",
    th2: "Nome da Coleção",
    th3: "Orçamento",
    th4: "Responsável",
  }

  @Input() collections!: Collection[]

  constructor() { 
  }

  ngOnInit(): void {
  }
}
