import { Component } from '@angular/core';

@Component({
  selector: 'ng-href-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgHrefLibrary';
  newLink = '';
  constructor() {
      setTimeout(() => {
          this.newLink = '<a class="ng-href" href="/">Home</a>';
      }, 5000);
  }
}
