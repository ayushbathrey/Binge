import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = environment.apiUrl;
  public apiResponse: any;

  constructor(private http: HttpClient,
              private router: Router ) { }

  getMovieRecommendation(movieName) {

    return this.http.get(this.baseUrl + 'title/' + movieName);
  }

  saveResponse(resp): void {
    this.apiResponse = resp;
  }

  getResponse(): object {
    console.log('getResponse was called');
    return this.apiResponse;
  }

}
