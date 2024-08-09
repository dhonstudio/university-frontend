import { Injectable } from '@angular/core';
import { Course } from '../../domain/entities/course.entity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseRepository {
  private readonly _baseUrl = 'https://localhost:7270/api/Course';

  constructor(private _httpClient: HttpClient) { }

  public getAllCourse(): Observable<Course[]> {
    return this._httpClient.get<Course[]>(this._baseUrl);
  }
}
