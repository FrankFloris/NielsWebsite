import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AboutMeComponent} from './about-me/about-me.component';
import {HomeComponent} from './home/home.component';
import {FractalshopComponent} from './fractalshop/fractalshop.component';
import {AboutfractalsComponent} from './aboutfractals/aboutfractals.component';


const routes: Routes = [
  {path: 'about-me', component: AboutMeComponent, data: { depth: 1}},
  {path: 'home', component: HomeComponent, data: { depth: 1}},
  {path: 'fractalshop', component: FractalshopComponent},
  {path: 'aboutfractals', component: AboutfractalsComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  // declarations: [],
  imports: [RouterModule.forRoot(routes)
    // ,CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
