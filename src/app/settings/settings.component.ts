import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { UserCheckinService } from '../user-checkin/user-checkin.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public form: FormGroup;
  sessions:any=[];
  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;
  constructor(private modal: NgbModal,private fb: FormBuilder,public _UserCheckinService:UserCheckinService) { }

  handleEvent(event): void { 
    console.log(event)  ;
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  loadAllSessions(){
    this._UserCheckinService.getAllSessions().subscribe(
      (sessions) => {
        this.sessions = sessions; 
        console.log(this.sessions)
      },
      (error) => console.log(error),
      ()=>{}
    );
  }
  
  ngOnInit() {
    this.loadAllSessions();
    this.form = this.fb.group({
      sdescription: [null, Validators.compose([Validators.required])],
      slocation: [null, Validators.compose([Validators.required])],
      stime: [null, Validators.compose([Validators.required])],
      sgear: [null, Validators.compose([Validators.required])],
      strainer: [null, Validators.compose([Validators.required])],
    });
  }


}
