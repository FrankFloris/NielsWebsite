import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-fractalshop',
  templateUrl: './fractalshop.component.html',
  styleUrls: ['./fractalshop.component.css']
})
export class FractalshopComponent implements OnInit {
  // old, new, all, structured, unstructured, micro = false;
  new = false;
  all = true;
  structured = false;
  unstructured = false;
  micro = false;
  old = false;

  constructor() { }

  ngOnInit() {
  // Get the <span> element that closes the modal
    const span = document.getElementsByClassName('close')[0];
  }

  setToFalse(){
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

  addModal(id: string) {
    const myImage = document.getElementById(id) as HTMLImageElement;
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImage') as HTMLImageElement;
    const captionText = document.getElementById('caption');
    modalImg.src = myImage.src;
    modalImg.alt = myImage.alt;
    captionText.innerHTML = modalImg.alt;
    modal.style.display = 'block';
  }
}
