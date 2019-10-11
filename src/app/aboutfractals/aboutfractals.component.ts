import {Component, Host, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-aboutfractals',
  templateUrl: './aboutfractals.component.html',
  styleUrls: ['./aboutfractals.component.css']
})
export class AboutfractalsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
// Get the <span> element that closes the modal
    const span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
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
