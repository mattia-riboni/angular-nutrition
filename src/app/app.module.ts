import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/comp/app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FruitListComponent } from './components/fruit-list/fruit-list.component';
import { FruitDetailComponent } from './components/fruit-detail/fruit-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FruitListComponent,
    FruitDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
