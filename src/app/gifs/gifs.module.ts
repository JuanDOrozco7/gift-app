import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardListComponent } from './components/card-list/card-list.component';
import { HomePageComponent } from './pages/home/homePage.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
  ]
})
export class GifsModule { }
