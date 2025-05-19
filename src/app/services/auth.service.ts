import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userTypeSubject = new BehaviorSubject<string>('');
  userType$ = this.userTypeSubject.asObservable();

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {
    // Recuperar el estado del usuario del localStorage si existe
    const savedUserType = localStorage.getItem('userType');
    if (savedUserType) {
      this.userTypeSubject.next(savedUserType);
      this.isAuthenticatedSubject.next(true);
    }
  }

  login(userType: string) {
    this.userTypeSubject.next(userType);
    this.isAuthenticatedSubject.next(true);
    localStorage.setItem('userType', userType);
  }

  logout() {
    this.userTypeSubject.next('');
    this.isAuthenticatedSubject.next(false);
    localStorage.removeItem('userType');
  }

  getCurrentUserType(): string {
    return this.userTypeSubject.value;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
} 