import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { StudentModule } from './student/student.module';
import { SharedModule } from '../../shared/shared.module';
import { CourseModule } from './course/course.module';
import { ClasseModule } from './classe/classe.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { UsersComponent } from './users/users.component';
import { AuthModule } from '../auth/auth.module';





@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    ToolbarComponent,
    UsersComponent, 
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule, 
    StudentModule,
    CourseModule,
    ClasseModule,
    HomeModule,
    SharedModule,
    
  ],
  exports:[DashboardComponent],
})
export class DashboardModule { }
