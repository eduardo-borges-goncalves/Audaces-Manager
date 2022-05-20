import { Component, Input, OnInit } from '@angular/core';

type TheadProps = {
  th1: string, 
  th2: string, 
  th3: string, 
  th4: string
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() thead!: TheadProps 
  @Input() routerLink!: string

  constructor() { }

  ngOnInit(): void {
  }

}
