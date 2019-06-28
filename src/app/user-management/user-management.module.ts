import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management.component';
import { UserManagementRoutes } from './user-management.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  NgbProgressbarModule,NgbTabsetModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserManagementRoutes),
    NgbProgressbarModule,
    NgbTabsetModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule
  ],
  declarations: [UserManagementComponent]
})
export class UserManagementModule { }
