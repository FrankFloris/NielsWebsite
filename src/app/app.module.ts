import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FractalshopComponent } from './fractalshop/fractalshop.component';
import { AboutfractalsComponent } from './aboutfractals/aboutfractals.component';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HomeComponent,
    FractalshopComponent,
    AboutfractalsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

