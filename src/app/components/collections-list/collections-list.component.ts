import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }
}
