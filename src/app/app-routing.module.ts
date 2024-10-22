import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { StudentComponent } from './features/dashboard/student/student.component';
import { DashboardModule } from './features/dashboard/dashboard.module';

const routes: Routes = [
  {
    path:'auth',
    component:AuthComponent,
    children:[
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'register',
        component: RegisterComponent
      }
    ],
  },
  {
    path:'dashboard',
    component:DashboardComponent,  
    loadChildren:() => DashboardModule, 
    
  }, 
  {
    path:'**',
    redirectTo:'auth/login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
