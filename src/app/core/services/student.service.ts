import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Estudiantes } from '../../features/dashboard/student/models';

const STUDENT_DB: Estudiantes[] = [
  {
    id: '1',
    nombre: 'Sergio',
    paterno: 'Rivera',
    materno: 'Romero',
    email: 'srivera@gmail.com',
  },
  {
    id: '2',
    nombre: 'Pedro',
    paterno: 'Garcia',
    materno: 'Morales',
    email: 'pgarciam@gmail.com',
  },
  {
    id: '3',
    nombre: 'Trinidad',
    paterno: 'Rivera',
    materno: 'Sanchez',
    email: 'trivera@gmail.com',
  },
  {
    id: '4',
    nombre: 'Camilo',
    paterno: 'Jerez',
    materno: 'Ahumada',
    email: 'cmjereza@gmail.com',
  },
];

@Injectable({ providedIn: 'root' })
export class StudentService {
  holaMundo() {
    return 'iniciando servicio angular Stundent';
  }

  getStudent(): Observable<Estudiantes[]> {
    return of([...STUDENT_DB]);
  }

  createStudent(newStudent: Estudiantes): Observable<Estudiantes[]> {
    const newId = (
      STUDENT_DB.reduce(
        (maxId, student) => Math.max(maxId, parseInt(student.id)),
        0
      ) + 1
    ).toString();
    const stundetToAdd = {
      ...newStudent,
      id: newId,
      nombre: newStudent.nombre,
      paterno: newStudent.paterno,
      materno: newStudent.materno,
      email: newStudent.email,
    };
    STUDENT_DB.push(stundetToAdd);
    return of([...STUDENT_DB]);
  }

  deleteStudent(id: string): Observable<Estudiantes[]> {
    const index = STUDENT_DB.findIndex((student) => student.id === id);
    if (index !== -1) {
      STUDENT_DB.splice(index, 1); // Eliminar estudiante
    }
    return of([...STUDENT_DB]);
  }
}
