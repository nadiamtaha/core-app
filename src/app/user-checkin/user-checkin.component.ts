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
  packages:any=[];
  selectedPackageId;
  qrResultString:string;
  selectedSessionId:number;
  page:number=1;
  currentUser;
  pageSize:number=7;
  country;
  constructor(public _UserCheckinService:UserCheckinService) {
    if(localStorage.getItem('currentUser')){
      this.currentUser=JSON.parse(localStorage.getItem('currentUser'));
      if(this.currentUser.country=="KSA")
         this.country=this.currentUser.country
      
  }
  }

  loadPageData(page?){
     page ? this.loadData(page) : this.loadData();
  }
  loadSessions(){
   
    if(!this.country)
    {
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
  scanQrCode(event){
    this.qrResultString = event
  }
  onSessionChange(sessionId){
    this.checkedUsers=[];
    this.selectedSessionId=sessionId;
    this.loadData(undefined,sessionId)
  }
  onPackageChange(packId){
    this.checkedUsers=[];
    this.selectedPackageId=packId;
    this.loadData(undefined,packId)
  }
  addUserId(e,user) {
    e.target.checked ? user.checked=true : user.checked=false;
    // if(e.target.checked){
    //    user.checked=true
    // }
    
    // else{
    //   user.checked=false
    // }
    this.checkedUsers = this.users.filter(function(user) {
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
    if(!this.country)
    {
      //call api
      this._UserCheckinService.checkInUserManually(this.selectedSessionId,this.checkedUserIds).subscribe(
      (test) => {      
        console.log(test)
      }
      );
    }
    else{
        //call api
        this._UserCheckinService.checkInKsaUserManually(this.selectedPackageId,this.checkedUserIds).subscribe(
          (test) => {      
            console.log(test)
          }
          );
    }
    
     
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
