import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from '../../../core/services/course.service';
import { Course } from './models';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent implements OnInit {
  @Input()
  courses:Course[] = [];

  constructor(private courseService: CourseService){}


  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses():void{
    this.courseService.getCourses().subscribe({
      next:(courses) =>{
        this.courses = courses;
      }
    })
  }
}


