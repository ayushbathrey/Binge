import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MovieService } from './movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Binge';
  movieName: string;

  constructor(private spinner: NgxSpinnerService, private movieService: MovieService, private router: Router) {

  }

  public getMovieName(): void {

    this.spinner.show();

    this.movieService.getMovieRecommendation(this.movieName).subscribe(
      resp => {
        this.spinner.hide();
        this.movieService.saveResponse(resp);
        this.router.navigate(['/search']);
    }, err => {
      console.log('err', err);
      this.spinner.hide();
    },
    );

  }
}
