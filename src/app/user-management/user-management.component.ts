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
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  public userForm: FormGroup;
  baseForImage="http://104.248.142.220:81/"
  users:any=[];
  sessions:any=[];
  selectedSessionId:number;
  page:number=1;
  pageSize:number=7;
  @ViewChild('modalContent')
  @ViewChild('qrContent')
  qrContent: TemplateRef<any>;
  modalContent: TemplateRef<any>;
  constructor(private modal: NgbModal,private fb: FormBuilder,public _UserCheckinService:UserCheckinService) { }
  handleEvent(event): void { 
    this.modal.open(this.modalContent, { size: 'lg' });
  }
 
  loadSessions(){  
    // this.selectedSessionId=this.sessions[0].id;  //default selection
    // this.loadData(undefined,this.sessions[0].id)
    this._UserCheckinService.getAllSessions().subscribe(
      (sessions) => {
        this.sessions = sessions;
        console.log(this.sessions)
      },
      (error) => console.log(error),
      ()=>{this.loadData(undefined,this.sessions[0].id);}
    );
  }
  onSessionChange(sessionId){
  
    this.selectedSessionId=sessionId;
    this.loadData(undefined,sessionId)
  }
  deleteUser(id){
    this._UserCheckinService.deleteUser(id).subscribe(
      (test) => {
        console.log(test)
      }
    );
  }
  onSubmit(){
   
    if(this.userForm.valid){
      this.userForm.value.type="client";
      this._UserCheckinService.addUser(this.userForm.value).subscribe(
        (response) => {
          this.loadData();
          console.log(response)
        }
      );
      this.userForm.reset();
      this.modal.dismissAll();
    }
  }
  loadData(page?,sessionId?){
    
    this._UserCheckinService.getAllUsers(page,sessionId).subscribe(
      (users) => {
        this.users = users;
        console.log(this.users.data)
      }
    );
  }
  ngOnInit() {
    this.userForm = this.fb.group({
      first_name: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
      mobile: [null, Validators.compose([Validators.required])]
    });

    this.loadSessions();
  }

}
