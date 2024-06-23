import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUser: string | null = null;

  login(username: string, password: string): boolean {
    if (password === 'password123') {
      this.loggedInUser = username;
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedInUser = null;
  }

  getUsername(): string | null {
    return this.loggedInUser;
  }
}
