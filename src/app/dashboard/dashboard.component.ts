import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor() { }

  ngOnInit() {
    this.books = [
      new Book('123456789', 'Angular', 'Zurück in die Zukunft', 5),
      new Book('987654321', 'AngularJS 1.x', 'Oldie but goldie', 2)
    ];
  }

  reorderBooks(book: Book) {
    console.log(book.title);
    this.books.sort((a, b) => b.rating - a.rating);
  }

}
