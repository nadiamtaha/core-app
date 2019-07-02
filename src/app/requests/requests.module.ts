import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsComponent } from './requests/requests.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { RequestsRoutes } from './requests.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule ,ReactiveFormsModule,
    RouterModule.forChild(RequestsRoutes),

  ],
  declarations: [RequestsComponent]
})
export class RequestsModule { }
