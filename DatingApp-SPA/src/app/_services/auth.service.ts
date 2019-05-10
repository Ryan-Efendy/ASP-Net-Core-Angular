import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base = 'http://localhost:5000/api/';
  constructor(private http: HttpClient) { } // common/http

  login(model: any) {

    return this.http.post(this.base + 'auth/login', model)
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem('token', user.token);
          }
        })
      );
  }
}
