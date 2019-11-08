import {Component, Input, OnInit} from '@angular/core';
import { Fractal } from '../fractal';
import { FRACTALS } from '../fractals-list';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {FractalService} from '../fractal.service';

@Component({
  selector: 'app-prijsinformatie-en-bestellen',
  templateUrl: './prijsinformatie-en-bestellen.component.html',
  styleUrls: ['./prijsinformatie-en-bestellen.component.css']
})
export class PrijsinformatieEnBestellenComponent implements OnInit {
  @Input() fractal: Fractal;

  constructor(
    private route: ActivatedRoute,
    private fractalService: FractalService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getFractal();
  }

  private getFractal() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.fractalService.getFractal(id)
      .subscribe(fractal => this.fractal = fractal);
  }

  goBack(): void {
    this.location.back();
  }
}
