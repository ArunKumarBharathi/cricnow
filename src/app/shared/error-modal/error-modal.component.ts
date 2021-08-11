import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss']
})
export class ErrorModalComponent implements OnInit,AfterViewInit{

  @Input() error;
  @Output() close=new EventEmitter<void>()
  @ViewChild('errorModal') errorModal:TemplateRef<any>
  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {}
  
  ngAfterViewInit(): void {
    this.modalService.open(this.errorModal)
  }
  closeModal(){
    this.modalService.dismissAll();
    this.close.emit();
  }

}
