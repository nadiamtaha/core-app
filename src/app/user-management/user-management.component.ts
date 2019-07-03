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
  baseForImage="https://core.fit:81/"
  users:any=[];
  sessions:any=[];
  packages:any=[];
  selectedPackageId=[];
  selectedSessionId:number;
  page:number=1;
  pageSize:number=7;
  currentUser;
  country;
  @ViewChild('userContent')
  // @ViewChild('qrContent')
  // qrContent: TemplateRef<any>;
  userContent: TemplateRef<any>;
  constructor(private modal: NgbModal,private fb: FormBuilder,public _UserCheckinService:UserCheckinService) { 
    if(localStorage.getItem('currentUser')){
      this.currentUser=JSON.parse(localStorage.getItem('currentUser'));
      if(this.currentUser.country=="KSA")
         this.country=this.currentUser.country
      
    }
  }
  handleEvent(event): void { 
    this.modal.open(this.userContent, { size: 'lg' });
  }
 
  loadSessions(){  
  if(!this.country){
    this._UserCheckinService.getAllSessions().subscribe(
      (sessions) => {
        this.sessions = sessions;
        console.log(this.sessions)
      },
      (error) => console.log(error),
      ()=>{this.loadData(undefined,this.sessions[0].id);}
    );
  }
    
    else{
      this._UserCheckinService.getAllPackages().subscribe(
        (packages) => {
          this.packages = packages;
          this.selectedPackageId=this.packages[0].id;
          console.log(this.packages)
        },
        (error) => console.log(error),
        ()=>{this.loadData(undefined,this.packages[0].id);}
      );
    }
    
  }
  onSessionChange(sessionId){
  
    this.selectedSessionId=sessionId;
    this.loadData(undefined,sessionId)
  }
  onPackageChange(packId){
    this.selectedPackageId=packId;
    this.loadData(undefined,packId)
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
      
      if(this.country){
        this.userForm.value.country="KSA";
        this.userForm.value.package_id=this.selectedPackageId;
      }
      else
       this.userForm.value.session_id=this.selectedSessionId;


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
    if(!this.country){
    this._UserCheckinService.getAllUsers(page,sessionId).subscribe(
      (users) => {
        let usersArr=users as any;
        this.users = usersArr.data;
        console.log(this.users)
      }
    );
    }
    else{
      this._UserCheckinService.getPackageUsers(this.selectedPackageId).subscribe(
        (users) => {
          let usersArr=users as any;
          this.users = usersArr.client;
          console.log(this.users)
        }
      );
    }
  }
  ngOnInit() {
    this.userForm = this.fb.group({
      first_name: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
      mobile: [null, Validators.compose([Validators.required])],
    });

    this.loadSessions();
  }

}
