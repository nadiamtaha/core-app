import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import {
  NgbProgressbarModule,
  NgbTabsetModule
} from '@ng-bootstrap/ng-bootstrap';


import { UserCheckin } from './user-checkin.component';
import { UserCheckinRoutes } from './user-checkin.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserCheckinRoutes),
    NgbAccordionModule,
    NgbProgressbarModule,
    NgbTabsetModule
  ],
  declarations: [UserCheckin]
})
export class UserCheckinModule {}
