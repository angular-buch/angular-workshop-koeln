
import { Component, OnInit, ViewChild } from '@angular/core';

import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';

@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  @ViewChild('myForm') myForm;

  book: Book;

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.book = new Book('', '', '', 0);

    console.log(this.myForm);
  }

  submitForm() {
    this.bs.createBook(this.book).subscribe(() => {
      console.log('Created');
    });
  }

  logme() {
    console.log(this.myForm);
  }

}
