import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { StudentsService } from '../students.service';
import { Students } from '../students';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
              private studentsService: StudentsService,
              private router: Router) {
  }

  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      prenom: ['', [Validators.required, Validators.maxLength(30)]],
      nom: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.maxLength(30)]]
    });
  }


  onSubmit() {
    //console.log(this.addForm.value);
    this.studentsService.createStudent(this.addForm.value)
    .subscribe(data => {
        this.router.navigate(['/view']);
    })
  }
}
