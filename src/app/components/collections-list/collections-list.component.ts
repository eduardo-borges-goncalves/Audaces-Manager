import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collection } from 'src/app/interfaces/collections';
import { TheadProps } from 'src/app/interfaces/thead';

@Component({
  selector: 'app-collections-list',
  templateUrl: './collections-list.component.html',
  styleUrls: ['./collections-list.component.scss']
})
export class CollectionsListComponent implements OnInit {
  @Input() thead!: TheadProps 
  @Input() routerLink!: string
  @Input() collections!: Collection[]

  constructor(
    private _router: Router, 
    private _activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void { 
  }

  onEdit(id: string) {
    console.log("click")
    this._router.navigate(["edit", id], { relativeTo: this._activeRoute}) 
  }
}
