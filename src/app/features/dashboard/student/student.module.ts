import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
  declarations: [
    StudentComponent,
    StudentDialogComponent,
    
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    
  ],
  exports:[StudentComponent],
})
export class StudentModule { }
