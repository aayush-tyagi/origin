import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lms';

  constructor(
    private _Router: Router
  ) {}

  ngOnInit() {
    this._Router.navigate(['signin']);
  }
}

