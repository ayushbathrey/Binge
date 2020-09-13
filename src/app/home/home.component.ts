import {Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { MovieService } from './../movie.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  
  movieData: any;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovieData();
  }
  ngOnChanges(): void {
    this.getMovieData();
  }

 

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.movieData.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit): void {
    const index = this.movieData.indexOf(fruit);

    if (index >= 0) {
      this.movieData.splice(index, 1);
    }
  }

  getMovieData() {
    this.movieData = this.movieService.getResponse();
    this.movieData = Object.values(this.movieData['suggestion']);
    console.log("HomeComponent.ts,getMovieData()",this.movieData, typeof(this.movieData));
  }

}
