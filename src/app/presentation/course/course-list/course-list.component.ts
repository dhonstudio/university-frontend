import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent {
  displayedColumns: string[] = ['id', 'title', 'credit'];
  dataSource = ELEMENT_DATA;
}
