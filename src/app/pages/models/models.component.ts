import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {

  thead = {
    th1: "ModeloID",
    th2: "Nome do Modelo",
    th3: "Coleção",
    th4: "Responsável",
  }
  routerLink = "/edit-model/1"

  constructor() { }

  ngOnInit(): void {
  }

}
