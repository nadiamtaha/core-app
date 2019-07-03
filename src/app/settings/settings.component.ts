import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { UserCheckinService } from '../user-checkin/user-checkin.service';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public form: FormGroup;
  public form1: FormGroup;
  sessions:any=[];
  packages:any=[];
  trainers = []
  locations = []
  currentUser;
  country;
  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;
  @ViewChild('modalContent2')
  modalContent2: TemplateRef<any>;
  constructor(private modal: NgbModal,private fb: FormBuilder,public _UserCheckinService:UserCheckinService,
              private settings_service: SettingsService) { 
                if(localStorage.getItem('currentUser')){
                  this.currentUser=JSON.parse(localStorage.getItem('currentUser'));
                  if(this.currentUser.country=="KSA")
                     this.country=this.currentUser.country
                  
                }
              }

  handleEvent(event): void { 
    console.log(event)  ;
    this.modal.open(this.modalContent, { size: 'lg' });
  }
  handleEvent2(event): void { 
    this.modal.open(this.modalContent2, { size: 'lg' });
  }

  loadAllSessions(){
    this._UserCheckinService.getAllSessions().subscribe(
      (sessions) => {
        this.sessions = sessions; 
        console.log("el sessions",this.sessions)
      },
      (error) => console.log(error),
      ()=>{}
    );
  }
  loadAllPackages(){
    this._UserCheckinService.getAllPackages().subscribe(
      (packages) => {
        this.packages = packages;
      },
      (error) => console.log(error),
      ()=>{}
    );
  }
  delete_trainer(trainer_id, index){
        
    this.trainers.splice(index, 1);

    this.settings_service.delete_trainer(trainer_id).subscribe((data: any) => {
       console.log(data);
       
    });
  }
  delete_session(session_id, index){
        
    this.sessions.splice(index, 1);

    this.settings_service.delete_session(session_id).subscribe((data: any) => {
       console.log(data);
       
    });
  }
  delete_package(pack_id, index){
        
    this.packages.splice(index, 1);

    this.settings_service.delete_package(pack_id).subscribe((data: any) => {
       console.log(data);
       
    });
  }
  onSubmit(form){
    console.log(form.value)
    form.value.type="trainer";
    if(this.country)
      form.value.country="KSA";
      //this.form.value.package_id=this.selectedPackageId;
    this.settings_service.add_trainer(form.value).subscribe((data:any)=>{
      console.log(data)
    })
  }
  onSubmitSession(form){
    if(!this.country)
    {
      this.settings_service.add_session(form.value).subscribe((data:any)=>{
        console.log("session added", data)
      })
    }
    else
    {
      this.settings_service.add_package(form.value).subscribe((data:any)=>{
        console.log("package added", data)
      })
    }
  }
  ngOnInit() {
    if(!this.country){
      this.settings_service.get_trainers().subscribe((data:any)=>{
        console.log(data);
        this.trainers = data.data;
      })
    }
    else
      this.settings_service.get_ksa_trainers(this.country).subscribe((data:any)=>{
        console.log(data);
        this.trainers = data;
      })
    this.settings_service.get_locations().subscribe((data:any)=>{
      console.log("locations",data);

      this.locations = data;
    })
    if(!this.country)
    this.loadAllSessions();
    else
    this.loadAllPackages();
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      location_id: ["", Validators.compose([Validators.required])],
      time: [null, Validators.compose([Validators.required])],
      capacity: [20, Validators.compose([Validators.required])],
      category_id: [1, Validators.compose([Validators.required])],
      gear: [null, Validators.compose([Validators.required])],
      trainer_id: ["", Validators.compose([Validators.required])],
    });
    this.form1 = this.fb.group({
      type: ["trainer", Validators.compose([Validators.required])],
      name: [null, Validators.compose([Validators.required])],
      dob: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])],
    });
  }


}
