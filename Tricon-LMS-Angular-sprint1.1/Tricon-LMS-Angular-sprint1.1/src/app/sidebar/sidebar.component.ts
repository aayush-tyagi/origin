import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, RouterOutlet} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private _Router: Router) { }

  ngOnInit() {
  }
btnClick = function () {
        this._Router.navigateByUrl('/authcourses');
};
btnClick1 = function () {
        this._Router.navigateByUrl('/dashboard');
};
btnClick2 = function () {
  this._Router.navigateByUrl('/user');
};
}
