import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: string[];

  constructor() { }

  ngOnInit() {
    this.books = [
      'AngularJS 1.x',
      'Angular'
    ];
  }

}
