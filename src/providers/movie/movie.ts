import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';


@Injectable()
export class MovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovie(page = 1){
    return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=2654b8ec1fc8a307214bcc098264a79a`);
  }

  getMovieDetails(filmeid){
    return this.http.get(this.baseApiPath + '/movie/' + filmeid + '?api_key=2654b8ec1fc8a307214bcc098264a79a');
  }

}


