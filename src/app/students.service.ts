import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from './students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) {
  }

  // Methode Liste Etudiants
  getStudents() {
    return this.http.get<Students[]>('http://localhost/angularPHP/list.php');
  }

  // Methode Delete Etudiant
  deleteStudent(id: number) {
    return this.http.delete<Students[]>('http://localhost/angularPHP/delete.php?id=' + id);
  }

  // Methode Insert Etudiant
  createStudent(student: Students) {
    return this.http.post('http://localhost/angularPHP/insert.php', student);
  }

}
 