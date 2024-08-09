import { Injectable } from '@angular/core';
import { Course } from '../../domain/entities/course.entity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseParamDto } from '../../domain/dto/course-param.dto';

@Injectable({
  providedIn: 'root',
})
export class CourseRepository {
  private readonly _baseUrl = 'https://localhost:7270/api/Course';

  constructor(private _httpClient: HttpClient) { }

  public getAllCourse(): Observable<Course[]> {
    return this._httpClient.get<Course[]>(this._baseUrl);
  }

  public createCourse(course: Course) {
    return this._httpClient.post(this._baseUrl, course);
  }

  public updateCourse(course: CourseParamDto) {
    return this._httpClient.post(this._baseUrl, course);
  }
}
