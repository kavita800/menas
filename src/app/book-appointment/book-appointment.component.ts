import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent implements OnInit {

  @ViewChild('bookAppointmentModelContent') bookAppointmentModelContent: TemplateRef < any > ;

  activeModal: NgbModalRef;
    
    constructor(private modalService: NgbModal,) { }

  ngOnInit(): void {
  }

  
  // function for open pupup model
  openModel = () => {
    
     this.activeModal = this.modalService
       .open(this.bookAppointmentModelContent, {
         backdrop: 'static',
         keyboard: false
       });
   }
   // function for closing the model.
   closeModel() {
     this.activeModal.close();
   };
 
}
