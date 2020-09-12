import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Binge';
  movieName: string;

  constructor(private spinner: NgxSpinnerService) {

  }

  public getMovieName(): void {
    this.spinner.show();
    console.log('function called', this.movieName);
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }
}
