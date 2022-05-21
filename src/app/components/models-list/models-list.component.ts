import { Component, Input, OnInit } from '@angular/core';
import { Models } from 'src/app/interfaces/models';
import { TheadProps } from 'src/app/interfaces/thead';

@Component({
  selector: 'app-models-list',
  templateUrl: './models-list.component.html',
  styleUrls: ['./models-list.component.scss']
})
export class ModelsListComponent implements OnInit {

  @Input() thead!: TheadProps 
  @Input() routerLink!: string
  @Input() models!: Models[]

  constructor() { }

  ngOnInit(): void {
  }
}
