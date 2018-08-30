import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, RouterOutlet} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _Router: Router,) { }

  ngOnInit() {
  }
btnClick3 = function () {
        this._Router.navigateByUrl('/signin');
};
}
