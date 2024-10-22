import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Course } from "../../features/dashboard/course/models";


const COURSES_db:Course[] = [
    {
        id: '1',
        nombre: 'Programacion 1',
        createdAt: new Date(), 
    },
    {
        id: '2',
        nombre: 'Base de datos Fundamentos',
        createdAt: new Date(), 
    },
    {
        id: '3',
        nombre: 'Desarrollo Seguro',
        createdAt: new Date(), 
    },
]

@Injectable({providedIn:'root' })
export class CourseService{

    getCourses(): Observable<Course[]>{
        return of([...COURSES_db])
    }

}