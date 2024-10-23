import { Component, OnInit } from '@angular/core';
import {ClassesService} from '../../../core/services/classes.service';
import { Classes } from './models';
import moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrl: './classe.component.scss',
  providers:[ClassesService]
})
export class ClasseComponent  implements OnInit{

  displayedColumns: string[] = ['id', 'nombre', 'createdAt'];
  classes:Classes[] = [];


  claseForm:FormGroup;

  constructor(private classesService: ClassesService,private fb:FormBuilder){
    this.claseForm = this.fb.group({
      nombre: ['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.loadClasses();
  }


  loadClasses():void{
    this.classesService.getClasses().subscribe({
      next: (data: Classes[]) => {
        this.classes = data;
      }
    });
  }

  addClasses(): void {
    if(this.claseForm.invalid){
      this.claseForm.markAllAsTouched();
    }else{
      this.classesService.createClasses(this.claseForm.value).subscribe({
        next:(newclase) =>{
          this.classes = [...this.classes,newclase];
          this.claseForm.reset();
        }
      })
    }
  }

  formatDate(date: Date): string {
    return moment(date).format('DD-MM-YYYY hh:mm'); // Formato personalizado
  }

}
