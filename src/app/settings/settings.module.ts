import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SettingsRoutes } from './settings.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  NgbProgressbarModule,
  NgbTabsetModule
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SettingsRoutes),
    NgbProgressbarModule,
    NgbTabsetModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
