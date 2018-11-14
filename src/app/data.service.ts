import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  restaurants: Object

  url = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search'

  constructor(private http: HttpClient,) { }


  getRestaurants(paramsModel): Observable<any> {
    let location = paramsModel.city+paramsModel.state
    let params = new HttpParams()
    params = params.append('location', location)
    params = params.append('price', paramsModel.price)
    return this.http.get(this.url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer R4cH5yHYJUSflInctheYkgrQAe-XxmwDxuVna5cb7PSlRMBg9OYQDBRIj-xOiXtCWmZ6sWwUankWL2fY6a2mt7tu49hH4RbVA3Y3_HcDKzRuAWi7JanpscaAshzrW3Yx'
      }),
      params:params
    })
    .pipe()
  }


}
