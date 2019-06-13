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
    state: '/',
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
  
  
];

@Injectable()
export class MenuService {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
