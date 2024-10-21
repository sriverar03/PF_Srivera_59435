import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { StudentFullNamePipe } from './pipes/student-full-name.pipe';
import { TitlesDirective } from './directivs/titles.directive';
import { ControlErrorMessagesPipe } from './pipes/control-error-messages.pipe';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    StudentFullNamePipe,
    TitlesDirective,
    ControlErrorMessagesPipe
  ],
  imports: [CommonModule],
  exports: [
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule, 
    MatListModule,       
    StudentFullNamePipe,
    ControlErrorMessagesPipe,
    TitlesDirective,
  ],
})
export class SharedModule {}
