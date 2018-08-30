import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, RouterOutlet} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private _Router: Router) { }

  ngOnInit() {
  }
  
btnClick = function () {
        this._Router.navigateByUrl('/dashboard');
};
}
