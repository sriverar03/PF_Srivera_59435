import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Classes } from "../../features/dashboard/classe/models";


const CLASSES_db:Classes[] = [
    {
        id: '1',
        nombre: 'Fundamentos de Programacion',
        createdAt: new Date(), 
    },
    {
        id: '2',
        nombre: 'Algoritmos',
        createdAt: new Date(), 
    },
    {
        id: '3',
        nombre: 'Logica de Programacion',
        createdAt: new Date(), 
    },
    {
        id: '4',
        nombre: 'Testing',
        createdAt: new Date(), 
    },
]

@Injectable({providedIn:'root' })
export class ClassesService{

    holaMundo(){
        return 'iniciando servicio angular Classes';
    }
    
    getClasses(): Observable<Classes[]>{
        return of([...CLASSES_db]);
    }

    

    createClasses(newClase: Classes): Observable<Classes> {
        const newId = (CLASSES_db.reduce((maxId, clase) => Math.max(maxId, parseInt(clase.id)), 0) + 1).toString();
        const claseToAdd = { ...newClase, id: newId, createdAt: new Date() };
        CLASSES_db.push(claseToAdd);
        return of(claseToAdd);
    }

    

}