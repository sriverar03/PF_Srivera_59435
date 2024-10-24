import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { Estudiantes } from './models';
import { StudentService } from '../../../core/services/student.service';





@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss',
  providers:[StudentService]
})
export class StudentComponent implements OnInit {

  displayedColumns: string[] = ['id','nombre', 'email' ,'actions']; 
  student:Estudiantes[] = [];


  constructor(private matDialog: MatDialog,private studentservice:StudentService){}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents():void{
    this.studentservice.getStudent().subscribe({
      next: (data: Estudiantes[]) => {
        this.student = data;
      }
    });
  }

  

  openModal(editStudent?:Estudiantes):void{
    this.matDialog.open(StudentDialogComponent,{data: editStudent},)
    .afterClosed()
    .subscribe({
      next: (result) => {
        console.log(result);
        if (!!result) {          
          this.studentservice.createStudent(result).subscribe({
            next: (newStudents) => {             
              this.student = [...newStudents]; 
            },            
          });
        }
      },
    });
  }




  onDelete(id: string): void {   
    this.studentservice.deleteStudent(id).subscribe(updatedStudents => {     
      this.student = updatedStudents;
    });
  }

 

  
}
