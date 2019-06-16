import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
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
      sdescription: [null, Validators.compose([Validators.required])],
      slocation: [null, Validators.compose([Validators.required])],
      stime: [null, Validators.compose([Validators.required])],
      sgear: [null, Validators.compose([Validators.required])],
      strainer: [null, Validators.compose([Validators.required])],
    });
  }


}
