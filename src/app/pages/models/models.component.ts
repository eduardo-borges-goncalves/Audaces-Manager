import { Component, OnInit } from '@angular/core';
import { Models } from 'src/app/interfaces/models';
import { ModelsService } from 'src/app/services/models/models.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {
  models: Models[] = []

  thead = {
    th1: "ModeloID",
    th2: "Nome do Modelo",
    th3: "Coleção",
    th4: "Responsável",
  }
  routerLink = "/edit-model/1"

  constructor(private service: ModelsService) {
    this.getModels()
   }

  ngOnInit(): void {
  }

  getModels() {
    this.service.get().subscribe(models => this.models = models)
  }

}
