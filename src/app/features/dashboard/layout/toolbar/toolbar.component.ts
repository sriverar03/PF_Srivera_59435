import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { User } from '../../users/models';
import { first, Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements OnInit {

  //authUser$: Observable<User | null>;

  constructor(private authService: AuthService) {
    console.log(this.authService.authUser$);  
  }

  ngOnInit(): void {
    /*this.authUser$.subscribe((user) => {
      console.log(user);
      if (user) {
        console.log('Usuario autenticado:', user.email);
      } else {
        console.log('No hay usuario autenticado');
      }
    });*/
  }
  
  
}
