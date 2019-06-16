import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyDumNjBS8OwLor6tLjgjg5P7bDAEyl4Xa0' })
  ],
  declarations: [DashboardComponent]
})

export class DashboardModule {}
