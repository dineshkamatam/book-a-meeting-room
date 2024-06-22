import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<User[]>(`${this.apiUrl}?username=${username}&password=${password}`).pipe(
      map(users => users.length > 0)
    );
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
}
