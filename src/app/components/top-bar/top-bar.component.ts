import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

constructor(
  private api: APIService,
  private router: Router,
){ }

  search(fruit: string){
    this.api.getFruit(fruit).subscribe(() => {
      this.router.navigateByUrl(`/fruits/${fruit}`)
    }, () => {
      this.router.navigateByUrl('/not_found')
    })
  }

}
