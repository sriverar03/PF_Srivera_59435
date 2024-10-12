import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { Estudiantes } from './models';




const ELEMENT_DATA: Estudiantes[] = [
  {nombre: 'Sergio', paterno: 'Rivera', materno:'Romero',email:'srivera@gmail.com'},
  {nombre: 'Pedro', paterno: 'Garcia', materno:'Morales',email:'pgarciam@gmail.com'},
  {nombre: 'Trinidad', paterno: 'Rivera', materno:'Sanchez',email:'trivera@gmail.com'},
  {nombre: 'Camilo', paterno: 'Jerez', materno:'Ahumada',email:'cmjereza@gmail.com'},
  
 
];

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {

  displayedColumns: string[] = ['nombre', 'email' ,'actions'];
  dataSource = ELEMENT_DATA;


  constructor(private matDialog: MatDialog){}

  openModal(editStudent?:Estudiantes):void{
    this.matDialog.open(StudentDialogComponent,{data: editStudent},)
    .afterClosed()
    .subscribe({
      next:(result) =>{
        console.log(result);
        if(!!result){
          this.dataSource = [...this.dataSource,{...result},]
        }
      },
    });
  }

  onDelete(email:string){
    this.dataSource = this.dataSource.filter((student => student.email !== email))
  }

 

  
}
