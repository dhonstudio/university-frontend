import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _baseUrl = 'https://localhost:7270/login';

  constructor(private _httpClient: HttpClient) { }

  login(credential: any): Observable<any> {
    return this._httpClient.post(`${this._baseUrl}`, credential).pipe(
      catchError(this.handleError)
    );
  }

  saveToken(token: string) {
    localStorage.setItem(environment.authName, token)
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(environment.authName);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Tidak berhasil';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message
    } else {
      errorMessage = error.error.message
    }
    return throwError(() => new Error(errorMessage))
  }
}
