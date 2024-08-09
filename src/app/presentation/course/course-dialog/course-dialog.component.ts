import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Course } from '../../../domain/entities/course.entity';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CourseFeature } from '../../../application/features/course.feature';

@Component({
  selector: 'app-course-dialog',
  standalone: true,
  imports: [MatButtonModule, FormsModule, MatDialogModule],
  templateUrl: './course-dialog.component.html',
  styleUrl: './course-dialog.component.scss'
})
export class CourseDialogComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<CourseDialogComponent>);
  readonly data = inject<Course>(MAT_DIALOG_DATA);

  caption = 'Add';

  public course: Course = {
    courseID: 0,
    title: '',
    credits: 0
  };

  constructor(private _courseFeature: CourseFeature) { }

  ngOnInit(): void {
    if (this.data != null) {
      this.course.courseID = this.data.courseID;
      this.course.title = this.data.title;
      this.course.credits = this.data.credits;
      this.caption = 'Update';
    }
  }

  onSaveButtonClick() {
    if (this.data == null) {
      this._courseFeature.addCourse(this.course).subscribe(() => {
        this.dialogRef.close();
      });
    } else {
      this._courseFeature.updateCourse(this.course.courseID, {
        title: this.course.title,
        credits: this.course.credits
      }).subscribe(() => {
        this.dialogRef.close();
      })
    }
  }
}
