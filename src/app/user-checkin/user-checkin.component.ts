import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { UserCheckinService } from './user-checkin.service';


@Component({
  selector: 'app-user-checkin',
  templateUrl: './user-checkin.component.html',
  styleUrls: ['./user-checkin.component.scss']
})
export class UserCheckin {
  users:any=[];
  sessions:any=[];
  checkedUserIds=[];
  checkedUsers=[];
  qrResultString:string;
  selectedSessionId:number;
  page:number=1;
  pageSize:number=7;
  constructor(public _UserCheckinService:UserCheckinService) {
  
  }

  loadPageData(page?){
     page ? this.loadData(page) : this.loadData();
  }
  loadSessions(){
    // this.sessions=[
    //   {
    //     "id": 6,
    //     "name": "zomba",
    //     "capacity": 20,
    //     "location_id": 1,
    //     "trainer_id": 1,
    //     "status": "active",
    //     "created_at": "2019-06-02 13:15:40",
    //     "updated_at": "2019-06-02 13:15:40",
    //     "category_id": 1,
    //     "duration": 2,
    //     "date": "Saturday",
    //     "description": null,
    //     "gear": null,
    //     "time": null,
    //     "fitness_level": "Beginner",
    //     "flag": 1
    //   },
    //   {
    //     "id": 7,
    //     "name": "sha3by",
    //     "capacity": 20,
    //     "location_id": 1,
    //     "trainer_id": 1,
    //     "status": "active",
    //     "created_at": "2019-06-03 09:33:45",
    //     "updated_at": "2019-06-03 09:33:45",
    //     "category_id": 1,
    //     "duration": 2,
    //     "date": "Saturday",
    //     "description": null,
    //     "gear": null,
    //     "time": null,
    //     "fitness_level": "Beginner",
    //     "flag": 1
    //   },
    //   {
    //     "id": 8,
    //     "name": "shaasddas3by",
    //     "capacity": 20,
    //     "location_id": 1,
    //     "trainer_id": 7,
    //     "status": "active",
    //     "created_at": "2019-06-03 12:36:38",
    //     "updated_at": "2019-06-03 12:36:38",
    //     "category_id": 1,
    //     "duration": 2,
    //     "date": "Saturday",
    //     "description": null,
    //     "gear": null,
    //     "time": null,
    //     "fitness_level": "Beginner",
    //     "flag": 1
    //   },
    //   {
    //     "id": 9,
    //     "name": "sha3by",
    //     "capacity": 20,
    //     "location_id": 1,
    //     "trainer_id": 7,
    //     "status": "active",
    //     "created_at": "2019-06-03 12:36:47",
    //     "updated_at": "2019-06-03 12:36:47",
    //     "category_id": 1,
    //     "duration": 2,
    //     "date": "Saturday",
    //     "description": null,
    //     "gear": null,
    //     "time": null,
    //     "fitness_level": "Beginner",
    //     "flag": 0
    //   }
    // ]
    // this.selectedSessionId=this.sessions[0].id;  //default selection
    // this.loadData(undefined,this.sessions[0].id)
    this._UserCheckinService.getAllSessions().subscribe(
      (sessions) => {
        this.sessions = sessions;
        this.selectedSessionId=this.sessions[0].id;
        console.log(this.sessions)
      },
      (error) => console.log(error),
      ()=>{this.loadData(undefined,this.sessions[0].id);}
    );
  }
  loadData(page?,sessionId?){
    
    this._UserCheckinService.getAllUsers(page,sessionId).subscribe(
      (users) => {
        this.users = users;
        console.log(this.users.data)
      }
    );
  }
  scanQrCode(event){
    this.qrResultString = event
  }
  onSessionChange(sessionId){
    this.checkedUsers=[];
    this.selectedSessionId=sessionId;
    this.loadData(undefined,sessionId)
  }
  addUserId(e,user) {
    e.target.checked ? user.checked=true : user.checked=false;
    // if(e.target.checked){
    //    user.checked=true
    // }
    
    // else{
    //   user.checked=false
    // }
    this.checkedUsers = this.users.data.filter(function(user) {
      return user.checked ==true;
    });
    
  }
  
  checkInUserManually(){
   this.checkedUserIds = this.checkedUsers.map(user => {
      return user.id;
   });
   if(this.checkedUserIds.length==0){
     console.log("notify here and not call el api")
   }
   else{
    
     //call api
     this._UserCheckinService.checkInUserManually(this.selectedSessionId,this.checkedUserIds).subscribe(
      (test) => {      
        console.log(test)
      }
    );
     
   }
  }
  checkInUserByScanning(){

    if(this.qrResultString)
    this._UserCheckinService.checkInUserbyScan(this.selectedSessionId,this.qrResultString).subscribe(
      (test) => {      
        console.log(test)
      }
    );
  }
  ngOnInit(): void {
    //this.loadPageData();
    this.loadSessions();
      //this.scanner.stop();
  

      // this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      //     this.hasCameras = true;

      //     console.log('Devices: ', devices);
      //     this.availableDevices = devices;

      //     // selects the devices's back camera by default
      //     // for (const device of devices) {
      //     //     if (/back|rear|environment/gi.test(device.label)) {
      //     //         this.scanner.changeDevice(device);
      //     //         this.selectedDevice = device;
      //     //         break;
      //     //     }
      //     // }
      // });

      // this.scanner.camerasNotFound.subscribe((devices: MediaDeviceInfo[]) => {
      //     console.error('An error has occurred when trying to enumerate your video-stream-enabled devices.');
      // });

      // this.scanner.permissionResponse.subscribe((answer: boolean) => {
      //   this.hasPermission = answer;
      // });

  }
  
 

 
}
