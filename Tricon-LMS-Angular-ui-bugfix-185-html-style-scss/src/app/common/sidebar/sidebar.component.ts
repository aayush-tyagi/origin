import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, RouterOutlet} from '@angular/router';
import {Router} from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faPen} from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  faCoffee = faCoffee;
  faBook = faBook;
  faPen = faPen;
  faBookReader = faBookReader;
  faKeyboard = faKeyboard;
  faTerminal = faTerminal;

  constructor(private _Router: Router) { }

  ngOnInit() {
  }
onAuthoredCourse = function () {
        this._Router.navigateByUrl('/authcourses');
};
onDashboard = function () {
        this._Router.navigateByUrl('/dashboard');
};
onUser = function(){
  this._Router.navigateByUrl('/user');
};
}
