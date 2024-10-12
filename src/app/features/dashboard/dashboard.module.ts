import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { StudentModule } from './student/student.module';
import { SharedModule } from '../../shared/shared.module';




@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    ToolbarComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule, 
    StudentModule,
    SharedModule,
  ],
  exports:[DashboardComponent],
})
export class DashboardModule { }
