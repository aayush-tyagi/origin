import { Component, OnInit } from '@angular/core';
import {CreateCourseService} from '../../services/create-course.service';
import { RouterModule, Routes, RouterOutlet} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-courses',
  templateUrl: './auth-courses.component.html',
  styleUrls: ['./auth-courses.component.scss']
})
export class AuthCoursesComponent implements OnInit {

  constructor( private createCourseService: CreateCourseService, private _Router: Router) { }

  ngOnInit() {
  }
onCreate = function () {
        this._Router.navigateByUrl('/createCourse');
};
}
