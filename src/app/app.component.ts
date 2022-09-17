import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'counterapp';

  counter: number = 0;

  increasecounter = () => {
    this.counter = this.counter + 1;
  };
  decreasecounter = () => {
    if (this.counter === 0) {
      return;
    }
    this.counter = this.counter - 1;
  };
  resetcounter = () => {
    this.counter = 0;
  };
}
