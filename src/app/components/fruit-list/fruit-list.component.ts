import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { Route, Router } from '@angular/router';
import allFruit from '../../../../allFruit.json'

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.scss']
})
export class FruitListComponent implements OnInit {

  constructor(
    private api: APIService,
    private router: Router,
  ){ }

  fruits: any;
  fruitPhoto: string[] = [];

  ngOnInit(): void {
    this.getAllFruits()
    //this.fruits = allFruit     For developing
    this.getFruitPhoto();
    console.log(this.fruits)
  }

  getAllFruits(): void{
    this.api.getAllFruits().subscribe((res:any) => {
      this.fruits = res;
      console.log(this.fruits)
    });
  }

  getFruitPhoto(){
    for (let i = 0; i < this.fruits.length; i++){
      console.log(this.fruits[i].name)
      this.api.getFruitPhohto(this.fruits[i].name).subscribe((photo: any) => {
        console.log(this.fruits[i].name)
        if(photo.total === 0){
          this.fruitPhoto.push('../../../assets/Indisponibile.jpg')
        } else {
          this.fruitPhoto.push(photo.results[0].urls.small);
        }

      })
    }
  }

  goFruitDetail(fruit: string){
    this.router.navigateByUrl('fruits/' + fruit)
  }


}
