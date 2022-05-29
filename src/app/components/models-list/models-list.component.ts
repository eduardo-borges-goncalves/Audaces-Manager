import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Model } from 'src/app/interfaces/models';
import { TheadProps } from 'src/app/interfaces/thead';

@Component({
  selector: 'app-models-list',
  templateUrl: './models-list.component.html',
  styleUrls: ['./models-list.component.scss']
})
export class ModelsListComponent implements OnInit {

  @Input() thead!: TheadProps 
  @Input() routerLink!: string
  @Input() models!: Model[]

  constructor(
    private _router: Router, 
    private _activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onEdit(id: string) {
    this._router.navigate(["edit", id], { relativeTo: this._activeRoute}) 
  }
}
