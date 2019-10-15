import { Component, OnInit } from '@angular/core';

import { StudentsService } from './../students.service';
import { Students } from '../students';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  students: Students[];

  constructor(private _studentsService: StudentsService) { }

  ngOnInit() {
    this._studentsService.getStudents()
    .subscribe((data: Students[]) => {
      this.students = data;
    });
  }


  delete(students: Students): void {

    this._studentsService.deleteStudent(students.id)
        .subscribe(data => {
          this.students = this.students.filter(u => u !== students);
        });
  }

}
