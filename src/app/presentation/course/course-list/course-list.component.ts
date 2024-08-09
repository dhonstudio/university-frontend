import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface Course {
  id: number,
  title: string;
  credit: number;
}

const ELEMENT_DATA: Course[] = [
  {id: 1, title: 'Hydrogen', credit: 1.0079},
  {id: 2, title: 'Helium', credit: 4.0026},
  {id: 3, title: 'Lithium', credit: 6.941},
  {id: 4, title: 'Beryllium', credit: 9.0122},
  {id: 5, title: 'Boron', credit: 10.811},
  {id: 6, title: 'Carbon', credit: 12.0107},
  {id: 7, title: 'Nitrogen', credit: 14.0067},
  {id: 8, title: 'Oxygen', credit: 15.9994},
  {id: 9, title: 'Fluorine', credit: 18.9984},
  {id: 10, title: 'Neon', credit: 20.1797},
];

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
