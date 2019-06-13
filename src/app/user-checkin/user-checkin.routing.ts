import { Routes } from '@angular/router';
import { UserCheckin } from './user-checkin.component';




export const UserCheckinRoutes: Routes = [
  {
    path: '',
    component: UserCheckin,
    data: {
      heading: 'User Checkin'
    }
  }
];
