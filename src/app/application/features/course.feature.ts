import { Injectable } from "@angular/core";
import { CourseRepository } from "../repositories/course.repository";
import { Course } from "../../domain/entities/course.entity";
import { Observable } from "rxjs";
import { CourseParamDto } from "../../domain/dto/course-param.dto";

@Injectable({
    providedIn: 'root'
})
export class CourseFeature {

    constructor(private _courseRepository: CourseRepository) { }

    public getCourseList(): Observable<Course[]> {
        return this._courseRepository.getAllCourse();
    }

    public addCourse(course: Course) {
        return this._courseRepository.createCourse(course);
    }

    public updateCourse(course: CourseParamDto) {
        return this._courseRepository.updateCourse(course);
    }
}