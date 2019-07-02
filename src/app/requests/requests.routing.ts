import { Routes } from '@angular/router';
import { RequestsComponent } from './requests/requests.component';





export const RequestsRoutes: Routes = [
  {
    path: '',
    component: RequestsComponent,
    data: {
      heading: 'Requests'
    }
  }
];
