import { Component } from '@angular/core';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yolo foobar!';

  constructor() {
    setTimeout(
      () => this.title = 'asynchroner Text',
      1000
    );
  }
}
