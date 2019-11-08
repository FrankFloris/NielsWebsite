import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import { FractalService} from '../fractal.service';
import {Fractal} from '../fractal';

@Component({
  selector: 'app-fractalshop',
  templateUrl: './fractalshop.component.html',
  styleUrls: ['./fractalshop.component.css']
})
export class FractalshopComponent implements OnInit {
  // old, new, all, structured, unstructured, micro = false;
  public new = false;
  public all = true;
  public structured = false;
  public unstructured = false;
  public micro = false;
  public old = false;
  fractals: Fractal[];
  selectedFractal: Fractal;

  constructor(
    private router: Router,
    activatedRoute: ActivatedRoute,
    title: Title,
    private fractalService: FractalService
  ) {}

  ngOnInit() {
  // Get the <span> element that closes the modal
    const span = document.getElementsByClassName('close')[0];
    this.getFractals();
  }

  setToFalse() {
    this.old = false;
    this.new = false;
    this.all = false;
    this.structured = false;
    this.unstructured = false;
    this.micro = false;
  }

  setOldToTrue() {
    this.setToFalse();
    this.old = true;
  }

  setNewToTrue() {
    this.setToFalse();
    this.new = true;
  }

  setStructuredToTrue() {
    this.setToFalse();
    this.structured = true;
  }

  setUnstructuredToTrue() {
    this.setToFalse();
    this.unstructured = true;
  }

  setMicroToTrue() {
    this.setToFalse();
    this.micro = true;
  }


  setAllToTrue() {
    this.setToFalse();
    this.all = true;
  }



  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  }

  closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }

  addModal(fractal: Fractal) {
    const myImage = document.getElementById(fractal.name) as HTMLImageElement;
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImage') as HTMLImageElement;
    const captionText = document.getElementById('caption');
    modalImg.src = myImage.src;
    modalImg.alt = myImage.alt;
    captionText.innerHTML = modalImg.alt;
    modal.style.display = 'block';
  }

  navigateTo(destination: string) {
    this.router.navigate(['/' + destination]);
  }

  toPriceInfo(fractal: Fractal) {
    this.router.navigate(['/fractalshop/prijsinformatie-en-bestellen/' + fractal.id]);
  }

  getFractals(): void {
    this.fractalService.getFractals()
      .subscribe(fractals => this.fractals = fractals);
  }
}
