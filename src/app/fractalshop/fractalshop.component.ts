import { Component, OnInit } from '@angular/core';

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
}
