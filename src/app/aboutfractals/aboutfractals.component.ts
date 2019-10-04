import { Component, OnInit } from '@angular/core';

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

  closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }

  addModal() {
    const myImage = document.getElementById('myImage') as HTMLImageElement;
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('img01') as HTMLImageElement;
    const captionText = document.getElementById('caption');
    modal.style.display = 'block';
    // modalImg.src = myImage;
    // captionText.innerHTML = this.alt;
  }
}
