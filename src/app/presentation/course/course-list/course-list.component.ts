import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CourseFeature } from '../../../application/features/course.feature';
import { Course } from '../../../domain/entities/course.entity';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatDialogModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent implements OnInit {
  displayedColumns: string[] = ['courseID', 'title', 'credits'];
  dataSource: Course[] = [];

  constructor(
    private _courseFeature: CourseFeature,
    private _matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._courseFeature.getCourseList().subscribe(result => {
      this.dataSource = result;
    })
  }

  onAddButtonClik() {
    this._matDialog.open(CourseDialogComponent);
  }
}
