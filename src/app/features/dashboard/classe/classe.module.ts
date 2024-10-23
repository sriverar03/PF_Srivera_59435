import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasseRoutingModule } from './classe-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { ClasseComponent } from './classe.component';


@NgModule({
  declarations: [ClasseComponent],
  imports: [
    CommonModule,
    ClasseRoutingModule,
    SharedModule,
  ],
  exports:[ClasseComponent]
})
export class ClasseModule { }
