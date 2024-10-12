import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Estudiantes } from '../models';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styles: ``
})
export class StudentDialogComponent {

 

    nombreControl = new FormControl('', [Validators.required]);
    paternoControl = new FormControl('', [Validators.required]);
    maternoControl = new FormControl('', [Validators.required]);
    emailControl = new FormControl('', [Validators.required]);
  
  
    EstudianteForm = new FormGroup({
      nombre: this.nombreControl,
      paterno: this.paternoControl,
      materno: this.maternoControl,
      email: this.emailControl,
 
    });

  constructor(private matDialogRef:MatDialogRef<StudentDialogComponent> ){
   
  }

 

  onSave(): void {
    if (this.EstudianteForm.valid) {
      this.matDialogRef.close(this.EstudianteForm.value)
    } else {
      this.EstudianteForm.markAllAsTouched();
    }
  }
}
