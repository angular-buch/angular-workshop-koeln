import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookFormComponent } from './book-form/book-form.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'book/:isbn', component: BookDetailsComponent },
  { path: 'form', component: BookFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BooksRoutingModule { }
