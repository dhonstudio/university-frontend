import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _baseUrl = 'https://localhost:7270/login';

  constructor(private _httpClient: HttpClient) { }

  login(credential: any): Observable<any> {
    return this._httpClient.post(`${this._baseUrl}`, credential);
  }

  saveToken(token: string) {
    localStorage.setItem(environment.authName, token)
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(environment.authName);
  }
}
