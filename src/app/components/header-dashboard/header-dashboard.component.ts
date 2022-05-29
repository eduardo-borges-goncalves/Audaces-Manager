import { Component, OnInit } from '@angular/core';
import { CollectionsService } from 'src/app/services/collections/collections.service';
import { ModelsService } from 'src/app/services/models/models.service';

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.scss']
})
export class HeaderDashboardComponent implements OnInit {
  dashboardData = {
    collections: 0,
    models: 0, 
    mediaBudget: 0,
  }

  constructor(
    private _service: CollectionsService, 
    private _serviceModels: ModelsService
    ) { }

  ngOnInit(): void {
    let totalBudget = 0

    this._service.get().subscribe(collections => {
      this.dashboardData.collections = collections.length

      collections.map(collection => totalBudget += Number(collection.budget))
      this.dashboardData.mediaBudget = totalBudget / collections.length
    })
    
    this._serviceModels.get().subscribe(models => this.dashboardData.models = models.length)
  }

}
