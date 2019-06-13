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
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyAZ8ER-y3lU1FrZ8LyXdyhvFTehXVVfovM' })
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
