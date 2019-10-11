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

  removeActiveClass() {
    const header = document.getElementById('nav');
    const link = header.getElementsByClassName('active');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < link.length; i++) {
      link[i].className = link[i].className.replace(' active', '');
    }

  }

  naarAboutMe() {
    this.removeActiveClass();
    const deze = document.getElementById('about-me');
    deze.className += ' active';
    this.router.navigate(['/about-me']);
  }

  naarHome() {
    this.removeActiveClass();
    const deze = document.getElementById('home');
    deze.className += ' active';
    this.router.navigate(['/home']);
  }

  naarFractalshop() {
    this.removeActiveClass();
    const deze = document.getElementById('fractalshop');
    deze.className += ' active';
    this.router.navigate(['/fractalshop']);
  }

  naarAboutfractals() {
    this.removeActiveClass();
    const deze = document.getElementById('aboutfractals');
    deze.className += ' active';
    this.router.navigate(['/aboutfractals']);
  }

  // naarFractalshopOld() {
  //   this.removeActiveClass();
  //   const deze = document.getElementById('fractalshop');
  //   deze.className += ' active';
  //   this.router.navigate(['/fractalshop']);
  //   this.setToFalse();
  //   this.setOldToTrue();
  // }

  // setToFalse() {
  //   FractalshopComponent.prototype.old = false;
  //   FractalshopComponent.prototype.new = false;
  //   FractalshopComponent.prototype.all = false;
  //   FractalshopComponent.prototype.structured = false;
  //   FractalshopComponent.prototype.unstructured = false;
  //   FractalshopComponent.prototype.micro = false;
  // }
  //
  // setOldToTrue() {
  //   this.setToFalse();
  //   FractalshopComponent.prototype.old = true;
  // }
}
