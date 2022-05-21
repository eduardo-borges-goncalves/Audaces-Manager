import { Component, OnInit } from '@angular/core';
import { Collection } from 'src/app/interfaces/collections';
import { CollectionsService } from 'src/app/services/collections/collections.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  collections:Collection[] = []

  constructor(private service: CollectionsService) { 
    this.getCollections()
  }

  ngOnInit(): void {
  }

  getCollections() {
    this.service.get().subscribe(collections => this.collections = collections)
  }
}
