import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksRoutingModule } from './books-routing.module';
import { BookFormComponent } from './book-form/book-form.component';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule
  ],
  declarations: [
    DashboardComponent,
    BookComponent,
    BookDetailsComponent,
    BookFormComponent
  ]
})
export class BooksModule { }
