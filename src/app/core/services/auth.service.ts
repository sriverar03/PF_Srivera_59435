import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, throwError } from 'rxjs';
import {} from '../../features/auth/auth.module';
import { AuthData } from '../../features/auth';
import { User } from '../../features/dashboard/users/models';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const FAKE_USER: User = {
  id: '1',
  firstName: 'Sergio',
  lastName: 'Rivera',
  email: 'prueba@gmail.com',
  password: '12345', 
  token: 'abcde123',
  cratedAt: new Date(),
  
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  private authUserSubject = new BehaviorSubject<User | null>(null);
  public authUser$ = this.authUserSubject.asObservable();
  

  constructor(private router: Router,private httpClient:HttpClient) {}

  login(data: AuthData): Observable<User> {

    return this.httpClient.get<User[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`)
    .pipe(map((users) => {
      if(!!users[0]){
        //success
        this.authUserSubject.next(users[0]);
        localStorage.setItem('token', users[0].token);
        return users[0];
      }
      else{
        //error
        throw throwError(() => new Error('datas invalidos'))
      }

     
    }));

  }
    // if (
    //   data.email !== FAKE_USER.email ||
    //   data.password !== FAKE_USER.password
    // ) {
    //   return throwError(() => new Error('los datos no son validos'));
    // }
    // this.authUserSubject.next(FAKE_USER);
    // //console.log(this.authUserSubject.getValue());
    // localStorage.setItem('token', FAKE_USER.token);
    // return of(FAKE_USER);
  

  logout() {
    //this.authUserSubject.next(null);
    this.router.navigate(['auth', 'login']);
  }

  verifyToken(): Observable<boolean> {
    const isValid = localStorage.getItem('token') === FAKE_USER.token;

    if (isValid) {
      this.authUserSubject.next(FAKE_USER);
    }
    else{
      this.authUserSubject.next(null);
    }

    return of(isValid);
  }
}
