import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
  requests:any=[];
  statusList=[
    {
        name:'Approve',
    },
    {
      name:'Deny',
    }
  ]
  constructor(public _RequestsService:RequestsService) { }
  onStatusChange(status,id){
    var isApproved;
    if(status=="Approve")
      isApproved=1;
    else 
      isApproved=0; 
    this._RequestsService.respondRequest(id,isApproved).subscribe(
      (requests) => {
        this.requests = requests;
        console.log(this.requests)
      }
    );
  }
  loadData(){
    
    this._RequestsService.getAllRequests().subscribe(
      (requests) => {
        this.requests = requests;
        console.log(this.requests)
      }
    );
  }
  ngOnInit() {
    this.loadData()
  }

}
