import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Output() rated = new EventEmitter<Book>();
  @Input() book: Book;

  constructor() { }

  rateUpX() {
    this.book.rateUp();
    this.rated.emit(this.book);
  }

  rateDownX() {
    this.book.rateDown();
    this.rated.emit(this.book);
  }

  ngOnInit() {
  }

}
