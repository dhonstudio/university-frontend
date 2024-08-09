import { Routes } from '@angular/router';
import { CourseListComponent } from './presentation/course/course-list/course-list.component';
import { LoginComponent } from './presentation/login/login.component';
import { authGuard } from './application/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: CourseListComponent, canActivate: [authGuard]
    },
    {
        path: 'course',
        component: CourseListComponent, canActivate: [authGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
