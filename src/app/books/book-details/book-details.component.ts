import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookStoreService } from '../../shared/book-store.service';

import { Book } from '../../shared/book';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit() {
    let isbn = this.route.snapshot.params['isbn'];
    this.bs.getSingle(isbn)
      .subscribe(res => this.book = res);
  }

}
