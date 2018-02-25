import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  coffeeList;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.http.get('assets/list.json').subscribe(x => {
      this.coffeeList = x;
    });
  }

}
