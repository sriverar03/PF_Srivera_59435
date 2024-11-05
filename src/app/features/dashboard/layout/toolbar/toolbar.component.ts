import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { User } from '../../users/models';
import { filter, first, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent{


  authUser$:Observable<User | null>;
  
  constructor(private authService: AuthService) 
  {
    this.authUser$ = this.authService.authUser$;
  }
  

  
  
  
}
