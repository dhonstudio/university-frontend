import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
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
  displayedColumns: string[] = ['courseID', 'title', 'credits', 'action'];
  dataSource: Course[] = [];

  constructor(
    private _courseFeature: CourseFeature,
    private _matDialog: MatDialog
  ) { }

  refreshList() {
    this._courseFeature.getCourseList().subscribe(result => {
      this.dataSource = result;
    });
  }

  ngOnInit(): void {
    this.refreshList();
  }

  onAddButtonClik() {
    this._matDialog.open(CourseDialogComponent).afterClosed().subscribe(() => {
      this.refreshList();
    });
  }

  onEditButtonClick(course: Course) {
    this._matDialog.open(CourseDialogComponent, {
      data: course
    }).afterClosed().subscribe(() => {
      this.refreshList();
    });
  }

  onDeleteButtonClick(course: Course) {
    if (confirm('Yakin Hapus?')) {
      this._courseFeature.removeCourse(course.courseID).subscribe(() => {
        this.refreshList();
      })
    }
  }
}
