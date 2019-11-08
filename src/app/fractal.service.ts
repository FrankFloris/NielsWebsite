import { Injectable } from '@angular/core';
import { Fractal } from './fractal';
import { FRACTALS} from './fractals-list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FractalService {

  constructor() { }

  getFractals(): Observable<Fractal[]> {
    return of (FRACTALS);
  }

  getFractal(id: number): Observable<Fractal> {
    return of (FRACTALS.find(fractal => fractal.id === id));
  }
}
