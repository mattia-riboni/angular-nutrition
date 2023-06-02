import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-fruit-detail',
  templateUrl: './fruit-detail.component.html',
  styleUrls: ['./fruit-detail.component.scss']
})
export class FruitDetailComponent implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private api: APIService,
  ){ }

  fruitName: string;
  fruit: any;
  fruitTest = {
    "name": "Apple",
    "id": 6,
    "family": "Rosaceae",
    "order": "Rosales",
    "genus": "Malus",
    "nutritions": {
      "calories": 52,
      "fat": 0.4,
      "sugar": 10.3,
      "carbohydrates": 11.4,
      "protein": 0.3
    }
  }
  caloriesWidth: number;
  fatWidth: number;
  sugarWidth: number;
  carbohydratesWidth: number;
  proteinWidth: number;
  fruitPhotoUrl: string;
  recipes: any;



  ngOnInit(): void {
    this.fruitName = this.route.snapshot.paramMap.get('fruit')
    this.getFruitInfo();
    //this.fruit = this.fruitTest;  For developing
    this.getFruitPhoto()
    this.setValuesBarWidth();
    this.getRecipes();
  }

  getFruitInfo(){
    this.api.getFruit(this.fruitName).subscribe((fruit: any) => {
      this.fruit = fruit;
    })
  }

  getFruitPhoto(){
    this.api.getFruitPhohto(this.fruitName).subscribe((photo : any) => {
      this.fruitPhotoUrl = photo.results[0].urls.regular;
      console.log(this.fruitPhotoUrl)
    })
  }

  setValuesBarWidth(){
    this.caloriesWidth = 700/200*(this.fruit.nutritions.calories);
    this.fatWidth = 700/5*(this.fruit.nutritions.fat);
    this.carbohydratesWidth = 700/25*(this.fruit.nutritions.carbohydrates);
    this.sugarWidth = 700/20*(this.fruit.nutritions.sugar);
    this.proteinWidth = 700/3*(this.fruit.nutritions.protein);
  }

  getRecipes(){
    this.api.getRecipe(this.fruitName).subscribe((recipes: any) => {
      console.log(recipes)
      this.recipes = recipes
    })
  }


}
