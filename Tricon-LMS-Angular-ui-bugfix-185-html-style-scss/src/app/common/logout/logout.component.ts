'Use Strict';

import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, RouterOutlet} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private _Router: Router, ) { }

  ngOnInit() {
  }
onLogout = function () {
        this._Router.navigateByUrl('/signin');
};
}
