import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(
    private http: HttpClient
  ) { }

  recipeHeaders: HttpHeaders = new HttpHeaders({
    'X-RapidAPI-Key': 'cd2f1cc58bmsh7767c620a9390ecp1582dbjsn93db1238ff7d',
		'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
  });

  fruitViceHeaders: HttpHeaders = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET'
  })

  fruitViceRequestOptions: object = {headers: this.fruitViceHeaders}

  recipeRequestOptions: object = {headers: this.recipeHeaders};


  getAllFruits(): Observable<Object>{
    return this.http.get('https://www.fruityvice.com/api/fruit/all')
  }

  getFruitPhohto(fruit: string): Observable<Object>{
    return this.http.get(`https://api.unsplash.com/search/photos?client_id=QKAXLrXvBuY_IbjPp0PAW7jWeWV3SHnNmc__4wOnkuY&page=1&query=${fruit}`)
  }

  getFruit(fruit: string): Observable<Object>{
    return this.http.get(`https://www.fruityvice.com/api/fruit/${fruit}`)
  }

  getRecipe(fruit: string){
    return this.http.get(`https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${fruit}`, this.recipeRequestOptions)
  }
}
