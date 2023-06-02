import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitListComponent } from './components/fruit-list/fruit-list.component';
import { FruitDetailComponent } from './components/fruit-detail/fruit-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'fruits', component: FruitListComponent},
  { path: '', redirectTo: 'fruits', pathMatch: 'full'},
  { path: 'fruits/:fruit', component: FruitDetailComponent },
  { path: 'not_found', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
