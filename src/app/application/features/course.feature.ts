import { Injectable } from "@angular/core";
import { CourseRepository } from "../repositories/course.repository";
import { Course } from "../../domain/entities/course.entity";

@Injectable({
    providedIn: 'root'
})
export class CourseFeature {

    constructor(private _courseRepository: CourseRepository) { }

    public getCourseList(): Course[] {
        return this._courseRepository.getAllCourse();
    }
}