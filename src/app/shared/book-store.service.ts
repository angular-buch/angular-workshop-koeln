import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Book } from './book';

@Injectable()
export class BookStoreService {

  constructor(private http: Http) { }

  getAll(): Observable<Book[]> {
    return this.http.get('https://book-monkey2-api.angular-buch.com/books')
      .map(res => res.json())
      .map(rawBooks => rawBooks
        .map(raw =>
          new Book(raw.isbn, raw.title, raw.description, raw.rating)
        )
      );
  }

}
