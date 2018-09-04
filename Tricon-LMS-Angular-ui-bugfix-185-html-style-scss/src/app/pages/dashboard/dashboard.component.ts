import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { RouterModule, Routes, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _Router: Router
  ) { }

  ngOnInit() {

    }


btnClick = function () {
        this._Router.navigateByUrl('/authcourse');
};
}
