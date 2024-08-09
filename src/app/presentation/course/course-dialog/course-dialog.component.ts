import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Course } from '../../../domain/entities/course.entity';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-dialog',
  standalone: true,
  imports: [MatButtonModule, FormsModule],
  templateUrl: './course-dialog.component.html',
  styleUrl: './course-dialog.component.scss'
})
export class CourseDialogComponent {
  public course: Course = {
    courseID: 0,
    title: '',
    credits: 0
  };

  onSaveButtonClick() {

  }
}
