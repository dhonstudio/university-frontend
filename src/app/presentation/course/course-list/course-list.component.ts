import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CourseFeature } from '../../../application/features/course.feature';
import { Course } from '../../../domain/entities/course.entity';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'credit'];
  dataSource: Course[] = [];

  constructor(private _courseFeature: CourseFeature) { }

  ngOnInit(): void {
    this.dataSource = this._courseFeature.getCourseList();
  }

  
}
