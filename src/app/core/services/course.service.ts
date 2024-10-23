import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Course } from "../../features/dashboard/course/models";


const COURSES_db:Course[] = [
    {
        id: '1',
        nombre: 'Analista Programador',
        createdAt: new Date(), 
    },
    {
        id: '2',
        nombre: 'Ingeniero de Datos',
        createdAt: new Date(), 
    },
    {
        id: '3',
        nombre: 'Analista de Malware',
        createdAt: new Date(), 
    },
    {
        id: '4',
        nombre: 'DevSecOps',
        createdAt: new Date(), 
    },
]

@Injectable({providedIn:'root' })
export class CourseService{

    holaMundo(){
        return 'iniciando servicio angular';
    }
    
    getCourses(): Observable<Course[]>{
        return of([...COURSES_db]);
    }

    getCourseById(id: string): Observable<Course | undefined> {
        const course = COURSES_db.find(course => course.id === id);
        return of(course);
    }

    createCourse(newCourse: Course): Observable<Course> {
        const newId = (COURSES_db.reduce((maxId, course) => Math.max(maxId, parseInt(course.id)), 0) + 1).toString();
        const courseToAdd = { ...newCourse, id: newId, createdAt: new Date() };
        COURSES_db.push(courseToAdd);
        return of(courseToAdd);
    }

    updateCourse(updatedCourse: Course): Observable<Course | undefined> {
        const index = COURSES_db.findIndex(course => course.id === updatedCourse.id);
        if (index !== -1) {
            COURSES_db[index] = { ...COURSES_db[index], ...updatedCourse };
            return of(COURSES_db[index]);
        }
        return of(undefined);
    }

    deleteCourse(id: string): Observable<boolean> {
        const index = COURSES_db.findIndex(course => course.id === id);
        if (index !== -1) {
            COURSES_db.splice(index, 1);
            return of(true);
        }
        return of(false);
    }

    generateRandomId(): string {
        return 'id-' + Math.random().toString(36).substr(2, 9);
      }

}