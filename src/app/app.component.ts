import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Niels-Webshop';

  constructor(
    private router: Router,
    activatedRoute: ActivatedRoute,
    title: Title
  ) {}

  naarAboutMe() {
    this.router.navigate(['about-me']);
  }

  naarHome() {
    this.router.navigate(['home']);
  }
}
