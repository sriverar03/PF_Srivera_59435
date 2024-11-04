import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth.guard';


const routes: Routes = [
  {
    path:'home',   
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path:'student',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
  },
  {
    path:'course',
    loadChildren: () => import('./course/course.module').then(m => m.CourseModule)
  },
  {
    path:'classe',
    loadChildren: () => import('./classe/classe.module').then(m => m.ClasseModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
