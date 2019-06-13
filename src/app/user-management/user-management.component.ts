import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  public form: FormGroup;

  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;
  constructor(private modal: NgbModal,private fb: FormBuilder) { }
  handleEvent(event): void { 
    console.log(event)  ;
    this.modal.open(this.modalContent, { size: 'lg' });
  }
  ngOnInit() {
    this.form = this.fb.group({
      uname: [null, Validators.compose([Validators.required])],
      umail: [null, Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
      uphone: [null, Validators.compose([Validators.required])]
    });
  }

}
