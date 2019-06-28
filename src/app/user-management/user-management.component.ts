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
  users:any=[];
  sessions:any=[];
  selectedSessionId:number;
  page:number=1;
  pageSize:number=7;
  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;
  constructor(private modal: NgbModal,private fb: FormBuilder,public _UserCheckinService:UserCheckinService) { }
  handleEvent(event): void { 
    this.modal.open(this.modalContent, { size: 'lg' });
  }
  loadSessions(){
    this.sessions=[
      {
        "id": 6,
        "name": "zomba",
        "capacity": 20,
        "location_id": 1,
        "trainer_id": 1,
        "status": "active",
        "created_at": "2019-06-02 13:15:40",
        "updated_at": "2019-06-02 13:15:40",
        "category_id": 1,
        "duration": 2,
        "date": "Saturday",
        "description": null,
        "gear": null,
        "time": null,
        "fitness_level": "Beginner",
        "flag": 1
      },
      {
        "id": 7,
        "name": "sha3by",
        "capacity": 20,
        "location_id": 1,
        "trainer_id": 1,
        "status": "active",
        "created_at": "2019-06-03 09:33:45",
        "updated_at": "2019-06-03 09:33:45",
        "category_id": 1,
        "duration": 2,
        "date": "Saturday",
        "description": null,
        "gear": null,
        "time": null,
        "fitness_level": "Beginner",
        "flag": 1
      },
      {
        "id": 8,
        "name": "shaasddas3by",
        "capacity": 20,
        "location_id": 1,
        "trainer_id": 7,
        "status": "active",
        "created_at": "2019-06-03 12:36:38",
        "updated_at": "2019-06-03 12:36:38",
        "category_id": 1,
        "duration": 2,
        "date": "Saturday",
        "description": null,
        "gear": null,
        "time": null,
        "fitness_level": "Beginner",
        "flag": 1
      },
      {
        "id": 9,
        "name": "sha3by",
        "capacity": 20,
        "location_id": 1,
        "trainer_id": 7,
        "status": "active",
        "created_at": "2019-06-03 12:36:47",
        "updated_at": "2019-06-03 12:36:47",
        "category_id": 1,
        "duration": 2,
        "date": "Saturday",
        "description": null,
        "gear": null,
        "time": null,
        "fitness_level": "Beginner",
        "flag": 0
      }
    ]
    this.selectedSessionId=this.sessions[0].id;  //default selection
    this.loadData(undefined,this.sessions[0].id)
    // this._UserCheckinService.getAllSessions().subscribe(
    //   (sessions) => {
    //     this.sessions = sessions;
    //     console.log(this.sessions)
    //   },
    //   (error) => console.log(error),
    //   ()=>{this.loadData(undefined,this.sessions[0].id);}
    // );
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
