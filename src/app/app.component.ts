import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {FractalshopComponent} from './fractalshop/fractalshop.component';

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

  private removeActiveClass() {
    const header = document.getElementById('nav');
    const link = header.getElementsByClassName('active');
    for (let i = 0; i < link.length; i++) {
      link[i].className = link[i].className.replace(' active', '');
    }
  }

  private setActiveClass(destination: string) {
    const deze = document.getElementById(destination);
    deze.className += ' active';
  }

  navigateTo(destination: string) {
    this.removeActiveClass();
    this.setActiveClass(destination);
    this.router.navigate(['/' + destination]);
  }


}
