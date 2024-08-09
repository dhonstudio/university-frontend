import { Routes } from '@angular/router';
import { CourseListComponent } from './presentation/course/course-list/course-list.component';

export const routes: Routes = [
    {
        path: '',
        component: CourseListComponent
    },
    {
        path: 'course',
        component: CourseListComponent
    }
];
