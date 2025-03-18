import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:5000/api/auth'; // Update with actual backend URL

  constructor(private http: HttpClient) {}

  registerUser(userObj: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, userObj);
  }
}
