import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

import { Book } from './book';

@Injectable()
export class BookStoreService {

  headers: Headers = new Headers();

  constructor(private http: Http) {
    this.headers.append('Content-Type', 'application/json');
  }

  getAll(): Observable<Book[]> {
    return this.http.get('http://book-monkey2-api.angular-buch.com/books')
      .retry(3)
      .map(res => res.json())
      .map(rawBooks => rawBooks
        .map(raw =>
          new Book(raw.isbn, raw.title, raw.description, raw.rating)
        )
      );
  }

  getSingle(isbn: string): Observable<Book> {
    console.log(`http://book-monkey2-api.angular-buch.com/book/${isbn}`);

    return this.http.get(`https://book-monkey2-api.angular-buch.com/book/${isbn}`)
      .retry(3)
      .map(res => res.json())
      .map(raw =>
        new Book(raw.isbn, raw.title, raw.description, raw.rating)
      );
  }

  createBook(book: Book): Observable<any> {
    return this.http.post(
      'http://book-monkey2-api.angular-buch.com/book',
      JSON.stringify(book),
      { headers: this.headers }
    );
  }



}
