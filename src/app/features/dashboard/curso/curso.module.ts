import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { CursoComponent } from './curso.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [CursoComponent],
  imports: [
    CommonModule,
    CursoRoutingModule,
    SharedModule,
  ],
  exports:[CursoComponent],
})
export class CursoModule { }
