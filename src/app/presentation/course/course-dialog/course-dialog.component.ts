import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Course } from '../../../domain/entities/course.entity';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CourseFeature } from '../../../application/features/course.feature';

@Component({
  selector: 'app-course-dialog',
  standalone: true,
  imports: [MatButtonModule, FormsModule, MatDialogModule],
  templateUrl: './course-dialog.component.html',
  styleUrl: './course-dialog.component.scss'
})
export class CourseDialogComponent {
  readonly dialogRef = inject(MatDialogRef<CourseDialogComponent>);

  public course: Course = {
    courseID: 0,
    title: '',
    credits: 0
  };

  constructor(private _courseFeature: CourseFeature) {}

  onSaveButtonClick() {
    this._courseFeature.addCourse(this.course).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
