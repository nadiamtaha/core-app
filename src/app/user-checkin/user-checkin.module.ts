import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { ZXingScannerModule } from '@zxing/ngx-scanner';
import {  NgbProgressbarModule,NgbTabsetModule,NgbAccordionModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { QrCodeAllModule } from 'ngx-qrcode-all';


import { UserCheckinRoutes } from './user-checkin.routing';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    //ZXingScannerModule,
    QrCodeAllModule,
    RouterModule.forChild(UserCheckinRoutes),
    NgbAccordionModule,
    NgbProgressbarModule,
    NgbPaginationModule,
    NgbTabsetModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: []
})
export class UserCheckinModule {}
