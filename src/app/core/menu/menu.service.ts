import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state?: string;
  name?: string;
  type: string;
  icon?: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [

  {
    state: 'viewMap',
    name: 'VIEWMAP',
    type: 'link',
    icon: 'ion-ios-speedometer'
  },
  {
    state: 'user-checkin',
    name: 'USERCHECKIN',
    type: 'link',
    icon: 'ion-ios-help'
  },
  {
    state: 'user-management',
    name: 'USERMANAGEMENT',
    type: 'link',
    icon: 'ion-ios-help'
  },
  {
    state: 'settings',
    name: 'SETTINGS',
    type: 'link',
    icon: 'ion-ios-help'
  },
  {
    state: 'requests',
    name: 'Requests',
    type: 'link',
    icon: 'ion-ios-help'
  },
  
  
];

@Injectable()
export class MenuService {
  currentUser;

  getAll(): Menu[] {
    return MENUITEMS;
  }
  showItem(state){
    //alert(test)
    if(localStorage.getItem('currentUser')){
      this.currentUser=JSON.parse(localStorage.getItem('currentUser'));
      if(this.currentUser.country=="KSA"||(this.currentUser.country=="EG"&&state!="requests"))
      {
          return true
      }
      // else if(this.currentUser.country=="EG")
      // {
      //   if(state!="requests")
      //      return true
      // }
    }
   
      
  }
}
