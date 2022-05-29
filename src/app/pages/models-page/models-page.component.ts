import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/interfaces/models';
import { ModelsService } from 'src/app/services/models/models.service';

@Component({
  selector: 'app-models-page',
  templateUrl: './models-page.component.html',
  styleUrls: ['./models-page.component.scss']
})

export class ModelsPageComponent implements OnInit {
  models: Model[] = []

  thead = {
    th1: "ModeloID",
    th2: "Nome do Modelo",
    th3: "Coleção",
    th4: "Responsável",
  }

  constructor(private service: ModelsService) {}

  ngOnInit(): void {
    this.service.get().subscribe(models => this.models = models)
  }

}