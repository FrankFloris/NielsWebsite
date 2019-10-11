import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  // closeResult: string;

  // constructor(private modalService: NgbModal) { }
  constructor() {}

  ngOnInit() {
  }

  // public close() {
  //   this.modalService.destroy();
  // }

  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'about-me'}).result.then((result) => {
  //     this.closeResult = 'Closed with: ${result}';
  //   }, (reason => {
  //     this.closeResult = 'Dismissed ${this.getDismissReason(reason)}';
  //   }));
  // }
  //
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }

}
