import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from '../../../core/services/course.service';
import { Course } from './models';
import moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
  providers:[CourseService]
})


export class CourseComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'createdAt'];
  courses:Course[] = [];
  selectedCourse: Course | null = null;

  courseForm:FormGroup;

  constructor(private courseService: CourseService,private fb:FormBuilder){
    this.courseForm = this.fb.group({
      nombre: ['',Validators.required]
    })
  }





  ngOnInit(): void {
    console.log(this.courseService.holaMundo());    
    this.loadCourses();
  }

  loadCourses():void{
    this.courseService.getCourses().subscribe({
      next: (data: Course[]) => {
        this.courses = data;
      }
    });
  }

  addCourse(): void {
    if(this.courseForm.invalid){
      this.courseForm.markAllAsTouched();
    }else{
      this.courseService.createCourse(this.courseForm.value).subscribe({
        next:(newcourse) =>{
          this.courses = [...this.courses,newcourse];
          this.courseForm.reset();
        }
      })
    }
  }

  updateCourse(): void {
    if (this.selectedCourse) {
      this.courseService.updateCourse(this.selectedCourse).subscribe(course => {
        if (course) {
          const index = this.courses.findIndex(c => c.id === course.id);
          this.courses[index] = course;
          this.selectedCourse = null; 
        }
      });
    }
  }

  deleteCourse(id: string): void {
    this.courseService.deleteCourse(id).subscribe(success => {
      if (success) {
        this.courses = this.courses.filter(course => course.id !== id);
      }
    });
  }

  selectCourse(course: Course): void {
    this.selectedCourse = { ...course }; 
  }

  clearSelection(): void {
    this.selectedCourse = null;
  }

  formatDate(date: Date): string {
    return moment(date).format('DD-MM-YYYY hh:mm'); // Formato personalizado
  }
}


